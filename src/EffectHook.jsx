import React from 'react';
import { useMovieContext } from './contexts/MovieContext';

/* useLayoutEffect, useEffect
- clean up function use effect
    - run before effect
    - just run when component re-render or unmount
    - not run component first render
*/

function EffectHook() {
  const [counter, setCounter] = React.useState(1);
  const [todos, setTodos] = React.useState([]);
  const [id, setId] = React.useState(1);
  const { temps } = useMovieContext();

  console.log('----------context: ', temps)

  React.useEffect(() => {
    console.log('run useEffect with empty dependency');

    async function fetchTodos() {
      const res = await fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/todo');
      const data = await res.json();
      setTodos(data.data);
    }
    fetchTodos();

    return () => {
      console.log('run useEffect empty dependency clean up function');
    }
  }, []); // run once-time in first render

  React.useEffect(() => {
    console.log('run useEffect no dependency');

    return () => {
      console.log('run useEffect no dependency clean up function');
    }
  }); // always run when component re-render, include first render

  React.useEffect(() => {
    console.log('run useEffect with values dependency', id);

    return () => {
      console.log('run useEffect values dependency clean up function');
    }
  }, [id]); // run when values changes

  React.useLayoutEffect(() => {
    console.log('run useLayoutEffect with empty dependency');

    return () => {
      console.log('run useLayoutEffect empty dependency clean up function');
    }
  }, []); // run once-time in first render

  React.useLayoutEffect(() => {
    console.log('run useLayoutEffect no dependency');

    return () => {
      console.log('run useLayoutEffect no dependency clean up function');
    }
  }); // always run when component re-render, include first render

  React.useLayoutEffect(() => {
    console.log('run useLayoutEffect with values dependency', id);

    return () => {
      console.log('run useLayoutEffect values dependency clean up function');
    }
  }, [id]); // run when values changes

  function incrementCounter() {
    setCounter((prevState) => {
      return prevState + 1
    });
  }

  console.log('------------------- times:', counter)
  console.log('render')
  return (
    <div>
      <h1>EffectHook</h1>
      Counter: {counter} <br />
      <button type="button" onClick={incrementCounter}>Increment Counter</button>

      <h2><b>List Todos</b></h2>
      <div>
        {todos.map(item => (
          <div key={item._id}>Title: {item.title}</div>
        ))}
      </div>

    </div>
  )
}

export default EffectHook