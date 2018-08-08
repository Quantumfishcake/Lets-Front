
import React, { Component } from 'react';
import Groups from './components/Groups.js'
import Header from './components/Header'
import Footer from './components/Footer'
import Interests from './components/Interests.js'


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
