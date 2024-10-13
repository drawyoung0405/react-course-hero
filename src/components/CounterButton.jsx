import React from 'react'

function CounterButton({ counter, incrementCounter }) {
  return (
    <div>
      CounterButton: {counter} <br />
      <button type="button" onClick={incrementCounter}>Increment Counter</button>
    </div>
  )
}

export default CounterButton