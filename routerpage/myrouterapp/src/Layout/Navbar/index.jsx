import React from 'react'
import './style.css'
import {  NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            
            <li><NavLink  to={'/'} activeClassName="active">Home </NavLink></li>
            <li><NavLink to={'/Contact'} activeClassName='active'> Contact</NavLink></li>
            <li><NavLink to={'/Detail'}>Detail</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar