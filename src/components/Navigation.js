import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.png';

 

class Nav extends Component {
 
  render () {
    return (
      <div className='navbar'>
        <img src={logo} width="250" height="100" className='logo' />
        <ul className='navlist'>
  {console.log(this.localStorage)}
          <Link to={`/`} className='navlink'>Home</Link>
          <Link to={`/groups`} className='navlink'>Groups</Link>
          <Link to={`/events`} className='navlink'>Events</Link>
          {localStorage.getItem('jwt') == null ? false : <Link to={`/newgroup`} className='navlink'>New Group</Link>}
          {localStorage.getItem('jwt') == null ? <Link to={`/signin`} className='navlink'>Sign In</Link> : false}
          {localStorage.getItem('jwt') == null ? <Link to={`/singup`} className='navlink'>Sign Up</Link> : false}
        </ul>
      </div>
    )
  }
}

export default Nav
