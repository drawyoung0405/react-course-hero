import React from 'react';

/*
Higher order-component.
Prevent the component re-render unnecessary.
It takes 2 arguments: one for React Component, one for custom compare (option). 
Shallow comparison.
*/

function PerformanceHook() {
  return (
    <div>PerformanceHook</div>
  )
}

export default PerformanceHook