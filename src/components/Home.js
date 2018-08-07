<<<<<<< HEAD
import React, { Component } from 'react';
import Groups from './Groups.js'
=======
import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Interests from './Interests.js'
>>>>>>> 8c15025f2d94a519e3c31f4310f5239122efa2d5

class Home extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <h1>Home</h1>
        <Interests />
        <Footer />
      </div>
    )
  }
}

export default Home
