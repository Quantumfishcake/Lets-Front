import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Groups from './Groups.js'
import Interests from './Interests.js'




class Home extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <h1>Home</h1>
      <Interests />
      <Footer />
      </div>
    );
  }
}

export default Home;
