import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <div>
        <h1 className='logo'> LETS </h1>
        <div>
          <Link to={`/groups`}>Groups</Link>
          <Link to={`/events`}>Events</Link>
          </div>
      </div>
    )
  }
}

export default Header
