import React from 'react'
import MovieForm from './components/movie/MovieForm'
import MovieCount from './components/movie/MovieCount'
import MovieList from './components/movie/MovieList'


/* Context API
- avoid "props drilling"
- component will be re-rendering when use context (event state doesn't change)
*/

function Movie() {
  return (
    <div>
      <h1>Context API</h1>

      <MovieForm />

      <MovieCount />

      <MovieList />
    </div>
  )
}

export default Movie