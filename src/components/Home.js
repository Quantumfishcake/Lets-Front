
import React, { Component } from 'react';
import Groups from './Groups'
import Header from './Header'
import Footer from './Footer'
import Interests from './Interests'


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
