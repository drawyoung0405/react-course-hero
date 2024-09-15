import React, { Fragment} from 'react'

function ParentExpress() {
  return (
    <Fragment>
      <span>expressionParent</span>
      <span>123</span>
    </Fragment>
  )
}

function JSX() {
  // variables (camelCase)
  const expressionVariable = 5;

  // one parent element
  const expressionParent = (
    <Fragment>
      <span>expressionParent</span>
      <span>123</span>
    </Fragment>
  )

  const expressionParent2 = <ParentExpress />;

  return (
    <div>
      <h1>JSX</h1>
      Expresesion Variable: {expressionVariable + 10} <br /><br />
      Expresesion Parent: {expressionParent} <br /><br />
      Expresesion Parent 2: {expressionParent2} <br /><br />
      Must be Closed: <input type="text" /> <br />
    </div>
  )
}

export default JSX