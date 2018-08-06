import React, { Component } from 'react';
import axios from 'axios'

import { Link } from 'react-router-dom'

const GROUPS_SERVER_URL = 'http://localhost:3000/groups.json'

class Api extends Component {
  constructor (props) {
    super (props)
    this.state = {
      groups: []
    }

    const fetchGroups = () => {
      console.log(GROUPS_SERVER_URL);
      axios.get(GROUPS_SERVER_URL).then((results) => {
        this.setState({groups: results.data})
        console.log(results.data);

      })
    }
    fetchGroups()

  }

  render() {
    console.log(this.state.groups);
    const { groups } = this.state;
    console.log(groups);
    console.log(groups.groups);
    return (
      <div >

        {groups &&  groups.groups && groups.groups.map((x) => <p><Link to={`/groups/${x.id}`} key={x.id}>{x.name}{x.location}</Link></p>)}

      </div>
    );
  }
}





class Groups extends Component {
  render() {
    return (
      <div >
      <h1>Groups</h1>
      <Api />
      </div>
    );
  }
}

export default Groups;
