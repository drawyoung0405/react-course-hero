import JSX from './JSX';
import Props from './Props';
import State from './State';
import Component from './Component';
import ComposeComponentTony from './sampleApp/ComposeComponentTony/ComposeComponentTony';
import ConditionalRendering from './ConditionalRendering';


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
      <ConditionalRendering />



     <br/>
     <br/>
    </>
  )
}

export default App
