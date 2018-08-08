import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png';

class Nav extends Component {
  render () {
    return (
      <div className='navbar'>
     <img src={logo} width="250" height="100" className='logo'/>
        <ul className='navlist'>
          
          <Link to={`/`} className='navlink'>Home</Link>
          <Link to={`/groups`} className='navlink'>Groups</Link>
          <Link to={`/events`} className='navlink'>Events</Link>
          <Link to={`/newgroup`} className='navlink'>New Group</Link>
        </ul>
      </div>
    )
  }
} 

export default Nav
