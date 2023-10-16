import { MOVIES_API_ROOT } from "../utils/constants";

const { createContext, useReducer, useContext } = require("react");

const MoviesDataContext = createContext();
const MoviesDataDispatchContext = createContext(null);

export function MoviesDataProvider({ children }) {
  const initialState = {
    movies: [],
    favorites: {},
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

function mapRawMovieDataToModel(rawMovie) {
  return {
    movieId: rawMovie.id,
    nameRU: rawMovie.nameRU,
    nameEN: rawMovie.nameEN,
    director: rawMovie.director,
    country: rawMovie.country,
    year: rawMovie.year,
    duration: rawMovie.duration,
    description: rawMovie.description,
    trailerLink: rawMovie.trailerLink,
    image: MOVIES_API_ROOT + rawMovie.image.url,
    thumbnail: MOVIES_API_ROOT + rawMovie.image.formats.thumbnail.url,
  };
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
    case "set": {
      const { allMovies, favorites } = action;
      return {
        movies: allMovies.map(mapRawMovieDataToModel),
        favorites: makeFavoritesObject(favorites),
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
