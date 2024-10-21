import React from 'react'
import { useMovieContext } from '../../contexts/MovieContext'

function MovieList() {
  const { movies } = useMovieContext();

  return (
    <div>
      {movies.map(movie => {
        return (
          <div key={movie.id}>
            Title: {movie.title}
          </div>
        )
      })}
    </div>
  )
}

export default MovieList