import React, { Component } from 'react';
import User from './components/User'
import axios from 'axios'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Group/>
      <User/>

      </div>
    );
  }
}

export default App;
