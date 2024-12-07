import React from 'react'
import { useMovieContext } from '../../contexts/MovieContext';

function MovieForm() {
  const { updateMovie } = useMovieContext();
  const [title, setTitle] = React.useState('');

  function onChange(e) {
    setTitle(e.target.value)
  }

  function submit() {
    updateMovie(title)
  }

  return (
    <div>
      Title: 
      <input type="text" value={title} onChange={onChange} />
      <button type="button" onClick={submit}>Submit</button>
    </div>
  )
}

export default MovieForm