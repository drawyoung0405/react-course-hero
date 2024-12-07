import React from 'react';

import ButtonComponent from './ButtonComponent';
import TitleComponent from './TitleComponent';
import { useNavigate, Outlet } from 'react-router-dom';

function ComposeComponentTony() {
  const navigate = useNavigate();
  // const [tabs, setTabs] = React.useState('profile')

  function switchTab(tab) {
    navigate(`/compose-tony/${tab}`)
  }
  return (
    <div>
      <h1>Sample App: Compose Component Tony</h1>
      <ButtonComponent />
      <TitleComponent />

      <br /><br />
      <div>
        First Name: Tony <br />
        Last Name: Nguyen <br />
        <br />
        {/* <button type="button" onClick={() => setTabs('profile')}>Profile</button>
        <button type="button" onClick={() => setTabs('account')}>Account</button> */}
       
        <button type="button" onClick={() => switchTab('profile')}>Profile</button>
        <button type="button" onClick={() => switchTab('account')}>Account</button>
      </div>
      <div>
        <Outlet />
        {/* {tabs === 'profile' && (
          <div>this is profile</div>
        )}

        {tabs === 'account' && (
          <div>this is account</div>
        )} */}
      </div>

    </div>
  )
}

export default ComposeComponentTony