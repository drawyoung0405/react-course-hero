import React from 'react';
import CounterButton from './components/CounterButton';

function createInitialState() {
  console.log('createInitialState')
  return 1;
}

function StateHook() {
  // const counter = React.useState(1);
  const [counter, setCounter] = React.useState(createInitialState);

  function incrementCounter() {
    // counter[1](counter[0] + 1)
    // auto batching state update
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // callback function 
    // sytanx code: arrow function () => {}
    // term react: updater function
    setCounter((prevState) => {
      console.log('1st time: ', prevState)
      return prevState + 1
    });
    setCounter((prevState) => {
      console.log('2st time: ', prevState)
      return prevState + 1
    });
  }

  console.log('counter: ', counter)

  return (
    <div>
      <h1>StateHook</h1>
      Counter: {counter} <br />
      <button type="button" onClick={incrementCounter}>Increment Counter</button>
      
      <CounterButton counter={counter} incrementCounter={incrementCounter} />
      <CounterButton counter={counter} incrementCounter={incrementCounter} />
    </div>
  )
}

export default StateHook