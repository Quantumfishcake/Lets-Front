<<<<<<< HEAD
import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Interests from './Interests.js'
import Loginpic from './Loginpic'
=======

import React, { Component } from 'react';
import Groups from './Groups'
import Header from './Header'
import Footer from './Footer'
import Interests from './Interests'

>>>>>>> 63938ffb75d4c4d84ff14706c69134204a001360

class Home extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Loginpic />
        <div className='interestscontainer'>
          <h3>Explore by Category</h3>
          <Interests />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
