import React from 'react'

function Logout({setIsValid}) {
  return (
    <>
        <h2>Welcome to Loc.</h2>
        <button 
        className="btn--logout"
        onClick={() => setIsValid(prevIsValid => !prevIsValid)}>Log out</button>
    </>
  )
}

export default Logout