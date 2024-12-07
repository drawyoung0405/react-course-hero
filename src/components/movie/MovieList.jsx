import React from 'react'
import { useMovieContext } from '../../contexts/MovieContext'

function MovieList() {
  const { movies, isLoading } = useMovieContext();

  if(isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

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