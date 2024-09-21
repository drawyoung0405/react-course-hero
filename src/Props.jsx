import React from 'react';

/* props
- pass props from parent to child
- name key not props

destructuring
const person = {
  first_name: 'tony',
  last_name: 'nguyen',
  ag: 20
}
// access properties -> es5
const first_name = person?.first_name;
const last_name = person.last_name 
// access properties -> es6 destructuring object
const { first_name, last_name } = person;

// children props => apply to dynamic content

// tiêu chí để nội suy 1 react component bên trong 1 react component khác
- viết theo PascalCase
- element must closed
*/

function Button() {
  return <button type="button">Submit Welcome</button>
}

// function Typography(props) {
function Welcome({ 
  name, 
  email, 
  buttonLabel = 'Submit', // default value
  address,
  component,
  component2: Component2,
  ...restProps
}) {
  console.log('welcome: ', restProps)
  return (
    <div>
      Welcome to: {name} <br />
      Email: {email} <br />
      Street: {address.street} <br />
      Ward: {address.ward} <br />
      City: {address.city} <br />
      District: {address.district} <br />
      React Element: {component} <br />
      React Element Type: <Component2 /> <br/>
      <button type="button">{buttonLabel}</button>
    </div>
  )
}

function Welcome2({ 
//  city,
//  street,
//  ward,
//  district
  city,
  children,
  ...restProps // rest props operator
}) {
  console.log('welcome2: ', restProps)
  return (
    <div>
      Welcome2 <br />
      Street: {restProps.street} <br />
      Ward: {restProps.ward} <br />
      City: {city} <br />
      District: {restProps.district} <br />
      This is children: {children}
    </div>
  )
}

function Dialog({ children }) {
  return (
    <>
      <b>Dialog</b> <br />
      {children}
    </>
  )
}

function Props() {
  const address = {
    city: 'hcm',
    district: 'phu nhuan',
    ward: 15,
    street: 'ky dong'
  }
  return (
    <div>
      <h1>Props</h1>
      <Welcome 
        name="tony" // string
        email="tony@gmail.com" // string
        buttonLabel='Ok'  // string
        address={address} // nested object
        color="#fff" // string
        age={20} // number
        fruits={['orange', 'watermelon']} // array
        primarySubmit={() => {}} // function
        gender={null} // null
        friendZone={undefined} // undefined
        isLogin={false} // boolean
        component={<Button />} // react element
        component2={Button}  // element type like <></>
      />
      <hr />
      <Welcome2 
        // city={address.city}
        // ward={address.ward}
        // district={address.district}
        // street={address.street}
        {...address} // rest operator
      >
        content welcome2
      </Welcome2>
      <hr />

      <Dialog>
        this is text
        <Welcome2 
          // city={address.city}
          // ward={address.ward}
          // district={address.district}
          // street={address.street}
          {...address} // rest operator
        >
          content welcome2
        </Welcome2>
      </Dialog>
      <br /> 

      <Dialog>
        this is form
        <form>
          First Name: <input type="text" />
        </form>
      </Dialog>
    </div>
  )
}

export default Props