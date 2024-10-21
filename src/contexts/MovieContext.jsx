import React from 'react';

const MovieContext = React.createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = React.useState([]);
  const temps = 1;

  function updateMovie(title) {
    const item = {
      id: Date.now(),
      title
    }
    setMovies(prevState => [...prevState, item])
  }

  return ( 
    <MovieContext.Provider
      value={{
        // states
        movies,
        temps,

        // actions
        updateMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovieContext = () => React.useContext(MovieContext);