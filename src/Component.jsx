import React from 'react';


/* 
stateless/presentation/pure component
- just only present the props.
- don’t need a state.
- reuse code. 

statefull/container component
- Contains logic code in component.
- Dependent on state for rendering,  such as fetching data.
- can contains state and props

how many way to component re-render?
- state change
- props change
- parent component render -> child component re-render
- key change (force component render)
*/

function Player({ multiple }) {
  console.log('Player Component render: ', multiple)
  return (
    <div>Player</div>
  )
}


function Component() {
  const [count, setCount] = React.useState(0);
  const [multiple, setMultiple] = React.useState(2);
  console.log('-------------------------')
  console.log('Parent Component render')

  // first render -> memory A. re-render -> memory N
  function updateCount() {
    // const newCount = count + 1;
    // setCount(newCount);

    // setCount(function() {})
    setCount((prevState) => {
      return prevState + 1
    })
  }

  function multipleCount(count) {
    setMultiple((prevState) => {
      return prevState * count * 2
    })
  }

  return (
    <div>
      <h1>Parent Component</h1>
      Count: {count} 
      <button type='button' onClick={updateCount}>Update Count</button>
      <br />
      Multiple: {multiple} 
      <button 
      type='button' 
      onClick={() => {
        multipleCount(count)
      }}>
        Multiple Count
      </button>

      <Player key={count} multiple={multiple} />
    </div>
  )
}

export default Component