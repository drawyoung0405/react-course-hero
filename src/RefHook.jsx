import React from 'react'

/* useRef
Refs provide a way to access DOM nodes or React elements created in the render method.
There are a few good use cases for refs:
  - Managing focus, text selection, or media playback.
  - Triggering imperative animations.
  - Integrating with third-party DOM libraries.
Unlike with state, updating a ref does not re-render your component.
The returned object will persist for the full lifetime of the component.
*/


function RefHook() {
  const [count, setCount] = React.useState(1);
  const sumRef = React.useRef(10); // string, number, array, object, function
  const nameRef = React.useRef(null);

  function updateCount() {
    setCount(prevState => prevState + 1);
    sumRef.current = sumRef.current + count;
  }

  function updateName() {
    if(!nameRef.current) return;

    nameRef.current.focus();
    nameRef.current.setSelectionRange(0, nameRef.current.value.length);
  }

  console.log("ref hook: ", {
    count,
    sumRef
  })

  return (
    <div>
      <h1>RefHook</h1> <br />
      State Count: {count} <button type="button" onClick={updateCount}>Update count</button> 

      <br />
      Sum variable: {sumRef.current} <br />
      Name: <input type="text" ref={nameRef} defaultValue="nguyne nhat hoa" />
      <button type="button" onClick={updateName}>Update Name</button>
    </div>
  )
}

export default RefHook