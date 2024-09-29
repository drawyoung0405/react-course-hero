import React from 'react'

/*
Inline If with Logical &&, || Operator
Inline If-Else with Conditional Operator
Element Variable
Function


&&: phân biệt vế trái/phải
- khi vế trái là true -> sẽ lấy vế phải
- khi vế trái là false -> sẽ lấy vế trái
Eg:
- 'tony' && 'hoa' -> true && 'hoa' -> 'hoa'
- true && 'loc' -> 'loc'
- 'tony' && [1,2].length > 0 && 'react' -> true && true && 'react' -> 'react'
- false && 'loc' -> false 
- 'loc' && ' ' -> true && ' ' -> ' '

||: render giá trị khi nó gặp toán tử là true đầu tiên
Eg:
- 'tony' || 'hoa' -> 'tony'
- ' ' || 'react' || 'tony' -> 'react'
*/

function ConditionalRendering() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [todo, setTodo] = React.useState('');
  /* setIsAuth(prevState => !prevState)
    1. false -> true
    2. true -> false
  */
  console.log('ConditionalRendering isAuth: ', isAuth)

  function addTodo() {
    setTodo('tony' + Date.now().toString())
  }

  function renderButton() {
    return (
      <button type="button">render button</button>
    )
  }

  return (
    <div>
      <h1>ConditionalRendering</h1>
      Login: <button type="button" onClick={() => setIsAuth(prevState => !prevState)}>Login</button>

      <h3>&&</h3>
      {isAuth && <div>Welcome to new user </div>}
      {/* {<div>Welcome to new user</div> && isAuth.toString()} */}

      <h3>||</h3>
      {isAuth || <div>Welcome to new user </div>}
      {/* {<div>Welcome to new user </div> || isAuth.toString()} */}

      <h3>Tenary conditional - ? :</h3>
      <button 
        type="button" 
        onClick={addTodo}
      >
        Update Todo</button>

      {todo ? <div>this is todo</div> : <div>this is no data</div>}
      <br />
      {renderButton()}
    </div>
  )
}

export default ConditionalRendering