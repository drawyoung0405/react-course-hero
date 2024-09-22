import React, { useState } from 'react'
import Typography from './components/Typography';

/* State
- Initial value is boolean, or array, or object, or string ...
- State is like a component’s memory. It lets a component keep track of some information and change it in response to interactions
- The state object is where you store property values that belongs to the component.
- When the state object changes, the component re-renders.

tham trị -> so sánh các giá trị vs nhau: string, number, boolean
Eg: 
- ' ' === 'tony' -> false
- 0 === 1 -> false
- true === true -> true

tham chiếu -> so sánh các vùng nhớ vs nhau: object
- objectA = {}, objectB = {}, objectC = objectA
Eg:
- objectA === objectB -> false
- objectC === objectA -> true
*/

function State() {
  // const [firstName, setFirstName] = React.useState('');
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState({
    text: '',
    author: 'tony'
  }); // memory A

  function updateName() {
    setFirstName('tony')
  }

  function updateMessage() {
    // message.text = 'message tony'; // mutate object memory A
    const newMessage = {
      ...message, // copy all properties
      text: 'tony'
    }; // memory B
    setMessage(newMessage) // memory B
  }

  console.log('State render: ', {
    firstName,
    message
  });

  return (
    <div>
      <h1>
        <Typography text="State" />
      </h1>
      First Name: {firstName} <br />
      Message: {message.text} <br />
      Author: {message.author} <br />

      <button type="button" onClick={updateName}>Update Name</button>
      <button type="button" onClick={updateMessage}>Update Message</button>
    </div>
  )
}

export default State