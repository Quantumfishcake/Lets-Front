import React, { Component } from 'react';

import axios from 'axios'
import Header from './Header'
import url from 'url'



import { Link } from 'react-router-dom'
var _ = require('lodash');

const GROUPS_SERVER_URL = 'http://localhost:3000/groups.json'

class GroupsApi extends Component {
  constructor (props) {
    super (props)
    this.state = {
      groups: [],

    }
    console.log(this.props.search);
    const searchfield = url.parse(this.props.search, true).query
    console.log(searchfield);
    const filterWord = searchfield.filterBy
    console.log(filterWord);

    const fetchGroups = () => {

      axios.get(GROUPS_SERVER_URL).then((results) => {

      console.log(results.data);
      const data2 =  _.filter(results.data.groups, data => _.some(data.interests, { name: filterWord }))

        console.log(data2);

      this.setState({groups: data2})
      console.log(this.state);

      })
    }
    fetchGroups()
  }

  render() {
    const { groups } = this.state;
    console.log(groups);
    return (
      <div >

        {groups && groups.map((x) => <p><Link to={`/groups/${x.id}`} key={x.id}>{x.name}</Link></p>)}

      </div>
    );
  }
}

//groups.map where groups.interests == props

export default GroupsApi
