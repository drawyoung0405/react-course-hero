import React from 'react'

function Login({setIsValid}) {
  return (
    <>
        <h2>Please sign in.</h2>
        <button 
        className="btn--login"
        onClick={() => setIsValid(prevIsValid => !prevIsValid)}>Log in</button>
    </>
  )
}

export default Login