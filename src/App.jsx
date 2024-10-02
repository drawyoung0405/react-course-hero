import JSX from './JSX';
import Props from './Props';
import State from './State';
import Component from './Component';
import ComposeComponentTony from './sampleApp/ComposeComponentTony/ComposeComponentTony';
import ComposeComponentLoc from './sampleApp-DuyLoc/sampleApp-ComposeComponent/ComposeComponentLoc';
import ConditionalRendering from './ConditionalRendering';
import List from './List';
import CSS from './CSS';
import GuestGreeting from './sampleApp-DuyLoc/sampleApp-GuestGreeting-Loc/GuestGreeting';
import Box from './sampleApp-DuyLoc/sampleApp-GenerateBox/Box';

function App() {
  const count = 1;

  // jsx
  return (
    <>
      <JSX />
      <br />

     <Props />
     <br/>

     <State />
     <br/>

     <Component />

     <br />
     <ComposeComponentTony />

     <br />
     <ComposeComponentLoc />

      <br />
      <ConditionalRendering />

      <br />
      <List />

      <br />
      <CSS />
      
      <br />
      <GuestGreeting />

      <br />
      <Box />



     <br/>
     <br/>
    </>
  )
}

export default App
