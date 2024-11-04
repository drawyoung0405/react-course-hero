import React from 'react';
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
import Form from './Form';
import { ProductList } from './pages/product/list';
import StateHook from './StateHook';
import SharingComponent from './pages/sharing-component'
import EffectHook from './EffectHook';
import ActiveTabComponent from './sampleApp-DuyLoc/ActiveTab/ActiveTabComponent';
import AccordionComponent from './sampleApp-DuyLoc/Accordion/AccordionComponent';
import Movie from './Movie';
import JobBoard from './sampleApp-DuyLoc/JobBoard/JobBoard';
import RefHook from './RefHook';
import UseImperativeHandle from './UseImperativeHandle';
import PerformanceHook from './PerformanceHook';

function App() {
  const count = 1;
  const [unmountEffectHook, setUnmountEffectHook] = React.useState(true);

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

      <br />
      <Form />

      <br />
      <ProductList />

      <br />
      <StateHook />

      <br />
      <SharingComponent />

      <br />
      <button type="button" onClick={() => setUnmountEffectHook(prevState => !prevState)}>Unmount effect hook</button>
      {unmountEffectHook  && <EffectHook />}
      
      <br />
      <ActiveTabComponent />

      <br />
      <AccordionComponent />

      <br />
      <Movie />

     <br/>
     <br/>
     
     <br />
     <JobBoard />

     <br />
     <RefHook />

     <br />
     <UseImperativeHandle />


     <br />
     <PerformanceHook />

     <br />
     <br />
     <br />
     <br />
     <br />
    </>
  )
}

export default App
