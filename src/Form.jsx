import React from 'react';

import { useResize } from './hooks/useResize';

/*
uncontroller input/components
- like traditional HTML form inputs:
- You can then get their value using a ref.
- Don’t cause re-render component.
- The input value is not being managed by React.

controller input/components
- The value is handled by the react state.
- cause re-render component
*/

function Form() {
  const { isSmallScreen } = useResize();
  const firstNameRef = React.useRef(null);
  const [form, setForm] = React.useState({
    lastName: '',
    address: ''
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit: ', {
      firstName: firstNameRef.current.value,
      form
    })
  }

  function updateForm(e) {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  

  console.log('Form re-render...', isSmallScreen)

  return (
    <div>
      <h1>Form</h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <form onSubmit={handleSubmit}>
        <h4>Uncontroller component/input</h4>
        First Name: 
        <input 
          id="first_name" 
          ref={firstNameRef} 
          type="text"  
          defaultValue="tony"
        /> <br />

        <h4>Controller component/input</h4>
        Last Name: 
        <input 
          id="last_name" 
          name="lastName"
          value={form.lastName} 
          type="text"  
          onChange={updateForm}
        /> <br />
        Address:
        <input 
          id="address" 
          name="address"
          value={form.address} 
          type="text"  
          onChange={updateForm}
        /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form