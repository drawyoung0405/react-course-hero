import React from 'react'
import { useDispatch } from 'react-redux'
import ButtonComponentLoc from './ButtonComponentLoc'
import TitleCoponentLoc from './TitleComponentLoc'

import { setTodo } from '../../redux/todo.action';
 
function ComposeComponent() {
  const dispatch = useDispatch();

  function addTodo() {
    dispatch(setTodo({
      title: 'title' + Date.now()
    }))
  }

  return (
    <>
    <h1>Sample App: Compose Component Duy Loc</h1>
      <button type="button" onClick={addTodo}>Add todo of redux</button> <br /><br />

      <div className="compose">
        <TitleCoponentLoc />
        <ButtonComponentLoc />
      </div>
      <div className="compose">
        <TitleCoponentLoc />
        <ButtonComponentLoc />
      </div>
    </>
  )
}

export default ComposeComponent