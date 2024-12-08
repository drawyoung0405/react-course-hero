import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Authenticate() {
  return (
    <div>
      <h2>Authenticate Demo Page</h2>
      <ul className='menu'>
        <li>
          <Link to="/authenticate/login">Login</Link>
        </li>
        <li>
          <Link to="/authenticate/register">Register</Link>
        </li>
        <li>
          <Link to="/authenticate/product">Product</Link>
        </li>
        <li>
          <Link to="/authenticate/about">About</Link>
        </li>
        <li>
          <Link to="/authenticate/account">Account</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default Authenticate