import React, { Component } from 'react'
import Nav from './Navigation'

class Header extends Component {
  render () {
    return (
      <div>
        <h1 className='logo'> LETS </h1>
        <Nav />
      </div>
    )
  }
}

export default Header
