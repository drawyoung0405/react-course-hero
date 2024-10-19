import React from 'react';

/* useLayoutEffect, useEffect
- clean up function use effect
    - run before effect
    - just run when component re-render or unmount
    - not run component first render
*/

function EffectHook() {
  const [counter, setCounter] = React.useState(1);
  const [id, setId] = React.useState(1);

  React.useEffect(() => {
    console.log('run useEffect with empty dependency');

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
    </div>
  )
}

export default EffectHook