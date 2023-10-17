import {
  mapRawMovieDataToModel,
  mapFavoritesResponseToMoviesModel,
} from "../utils/utils";

const { createContext, useReducer, useContext } = require("react");

const MoviesDataContext = createContext();
const MoviesDataDispatchContext = createContext(null);

export function MoviesDataProvider({ children }) {
  const initialState = {
    movies: [],
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

function moviesDataReducer(moviesData, action) {
  switch (action.type) {
    case "setAllMovies": {
      if (moviesData.isAllMoviesDownloaded) {
        console.error("Repeated fetch of all movies");
      }
      const { data } = action;
      return {
        ...moviesData,
        movies: data.map(mapRawMovieDataToModel),
        isAllMoviesDownloaded: true,
      };
    }
    case "setFavorites": {
      const { isFavoritesDownloaded, isAllMoviesDownloaded, movies } =
        moviesData;
      if (isFavoritesDownloaded) {
        console.error("Repeated fetch of favorites");
      }
      const { data } = action;
      return {
        movies: isAllMoviesDownloaded
          ? movies
          : data.map(mapFavoritesResponseToMoviesModel),
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
