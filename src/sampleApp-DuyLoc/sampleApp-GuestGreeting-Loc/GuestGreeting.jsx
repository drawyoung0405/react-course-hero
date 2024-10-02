import React from 'react'
import Login from "./Login";
import Logout from "./Logout";

function GuestGreeting() {
    const [isValid, setIsValid] = React.useState(false);
  return (
    <>
        <h1>Sample App: Guest Greeting Loc</h1>
        <h3>{isValid ? <Logout setIsValid={setIsValid} /> : <Login setIsValid={setIsValid} />}</h3>
    </>
  )
}

export default GuestGreeting