import React from 'react'
import ButtonComponentLoc from './ButtonComponentLoc'
import TitleCoponentLoc from './TitleComponentLoc'
function ComposeComponent() {
  return (
    <>
    <h1>Sample App: Compose Component Duy Loc</h1>
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