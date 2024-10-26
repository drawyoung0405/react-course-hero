import React from 'react';

const initialState = {
  isLoading: false,
  movies: []
}

function movieReducer(state = initialState, action) {
  switch(action.type) {
    case "SHOW_LOADING": {
      return {
        ...state,
        isLoading: true
      }
    }
    case "HIDE_LOADING": {
      return {
        ...state,
        isLoading: false
      }
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    }
    case "ADD_MOVIE": {
      return {
        ...state,
        movies: [...state.movies, action.payload]
      }
    }
    default:
      return state
  }
}

// action creator
function showLoading() {
  return {
    type: "SHOW_LOADING"
  }
}

function hideLoading() {
  return {
    type: "HIDE_LOADING"
  }
}

function setLoading(isLoading) {
  return {
    type: "SET_LOADING",
    payload: {
      isLoading
    }
  }
}

function addMovie(payload = {}) {
  return {
    type: "ADD_MOVIE",
    payload
  }
}

const MovieContext = React.createContext();

export const MovieProvider = ({ children }) => {
  const [{ isLoading, movies }, dispatch] = React.useReducer(movieReducer, initialState);

  function updateMovie(title) {
    const item = {
      id: Date.now(),
      title
    }
    // dispatch(showLoading());
    dispatch(setLoading(true))

    dispatch(addMovie(item));

    setTimeout(() => {
      // dispatch(hideLoading());
      dispatch(setLoading(false))
    }, 1000);
  }

  return ( 
    <MovieContext.Provider
      value={{
        // states
        movies,
        isLoading,

        // actions
        updateMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovieContext = () => React.useContext(MovieContext);