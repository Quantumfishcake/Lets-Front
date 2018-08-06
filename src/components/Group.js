import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'
var _ = require('lodash');



const GROUP_SERVER_URL = 'http://localhost:3000/groups/'

class Api extends Component {
  constructor (props) {
    super (props)
    this.state = {
      group: []
    }

    const fetchGroup = () => {
      console.log(GROUP_SERVER_URL+this.props.id+'.json');
      axios.get(GROUP_SERVER_URL+this.props.id+'.json').then((results) => {
        this.setState({group: results.data})
        console.log(results.data);

      })
    }
    fetchGroup()

  }

  render() {
    const { group } = this.state.group;
    return(
      <div >
      {group && _.map(group, function(value, key){
        return <li>{key + ':' + ' ' + value} </li>
      })}


      </div>
    )
  }
}



class Group extends Component {
  render() {
    return (
      <div >
      <Header />
      <h1>Group single</h1>
      <Api id={this.props.match.params.id}/>
      </div>
    );
  }
}

export default Group;
