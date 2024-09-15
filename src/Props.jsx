import React from 'react';

/* props
- pass props from parent to child
- name key not props
*/

function Typography(props) {
  console.log('props: ', props)
  return (
    <div>Welcome to: {props.name}</div>
  )
}

function Props() {
  return (
    <div>
      <h1>Props</h1>

      <Typography 
        name="tony"
      />
      <Typography 
        name="hoa"
      />
      <Typography />
    </div>
  )
}

export default Props