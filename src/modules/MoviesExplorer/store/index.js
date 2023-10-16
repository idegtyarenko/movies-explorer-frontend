import { MOVIES_API_ROOT } from "../utils/constants";

const { createContext, useReducer, useContext } = require("react");

const MoviesContext = createContext();
const MoviesDispatchContext = createContext(null);

export function MoviesProvider({ children }) {
  const initialState = {
    allMovies: [],
    favorites: {},
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

function moviesReducer(movies = [], action) {
  switch (action.type) {
    case "set": {
      const { allMovies, favorites } = action;
      return {
        allMovies: allMovies.map(mapRawMovieDataToModel),
        favorites: makeFavoritesObject(favorites),
      };
    }
    case "addToFavorites": {
      const { movieId, _id } = action;
      return {
        ...movies,
        favorites: {
          ...movies.favorites,
          [movieId]: _id,
        },
      };
    }
    case "removeFromFavorites": {
      const { movieId } = action;
      const { [movieId]: removedKey, ...updatedFavorites } = movies.favorites;
      return {
        ...movies,
        favorites: updatedFavorites,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
