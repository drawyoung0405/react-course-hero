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
import CustomHook from './CustomHook';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import TrafficLight from './sampleApp-DuyLoc/TrafficLight/TrafficLight';
import Autocomplete from './sampleApp-DuyLoc/Autocomplete/Autocomplete';

function App() {
  const count = 1;
  const [unmountEffectHook, setUnmountEffectHook] = React.useState(true);

  // jsx
  return (
    <>
      <ul className='menu'>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/props">Props</Link>
        </li>
        <li>
          <Link to="/state">State</Link>
        </li>
        <li>
          <NavLink to="/component" replace>Component</NavLink>
        </li>
        <li>
          <NavLink to="/list" replace>List</NavLink>
        </li>
        <li>
          <NavLink to="/compose-tony" replace>Compose Tony</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/jsx' element={ <JSX />} />
        <Route path='/props' element={ <Props />} />
        <Route path='/state' element={ <State />} />
        <Route path='/component/:id/item/itemId' element={<Component />} />
        <Route path='/list' element={ <List />} />
        {/* <Route path='/compose-tony' element={ <ComposeComponentTony />} />
        <Route path='/compose-tony/profile' element={<div>this is profile</div>} />
        <Route path='/compose-tony/account' element={<div>this is account</div>} /> */}
        <Route path='/compose-tony' element={ <ComposeComponentTony />}>
          <Route path='profile' element={<div>this is profile</div>} />
          <Route path='account' element={<div>this is account</div>} />
        </Route>
      
      </Routes>

      <hr />

     <br />
     <ComposeComponentLoc />

      <br />
      <ConditionalRendering />

      <br />

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

     <br/>
     <br/>
     <TrafficLight />

     <br />
     <br />
     <Autocomplete />

     <br />
     <RefHook />

     <br />
     <UseImperativeHandle />


     <br />
     <PerformanceHook />

     <br />
     <CustomHook />

     <br />
     <br />
     <br />
     <br />
     <br />
    </>
  )
}

export default App
