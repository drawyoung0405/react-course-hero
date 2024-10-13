import React from 'react'

function SharingComponent() {
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState('');

  function handleAdd() {
    const todo = {
      id: Date.now(),
      title: text
    }
    setTodos(prevState => [...prevState, todo])
  }

  return (
    <div>
      <h1>SharingComponent</h1>
      <div>
        Title: 
        <input type="text" onChange={e => setText(e.target.value)}/>
        <button type="button" onClick={handleAdd}>Add todo</button>
      </div>
      <div>
        Todo Count: {todos.length}
      </div>
      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default SharingComponent