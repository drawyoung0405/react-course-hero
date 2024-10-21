import React from 'react'
import { useMovieContext } from '../../contexts/MovieContext'

function MovieCount() {
  const { movies } = useMovieContext();
  return (
    <div>MovieCount: {movies.length}</div>
  )
}

export default MovieCount