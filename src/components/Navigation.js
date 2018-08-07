import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render () {
    return (
      <ul className='nav'>
        <li className='navlink'><Link to={`/`}>Home</Link></li>
        <li className='navlink'><Link to={`/groups`}>Groups</Link></li>
        <li className='navlink'><Link to={`/events`}>Events</Link></li>
        <li className='navlink'><Link to={`/newgroup`}>New Group</Link></li>
        <li className='navlink'><Link to={`/newevent`}>New Event</Link></li>
      </ul>
    )
  }
}

export default Nav
