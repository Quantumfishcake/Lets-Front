import React, { Component } from 'react'
import axios from 'axios'
import url from 'url'
import { Link } from 'react-router-dom'
import _ from 'lodash'

const GROUPS_SERVER_URL = 'https://backend-lets.herokuapp.com/groups.json'

class GroupsApi extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groups: [],
      filterWords: ''
    }
    console.log(this.props.search)
    const searchfield = url.parse(this.props.search, true).query
    console.log(searchfield)
    const filterWord = searchfield.filterBy
    console.log(filterWord)
    

    const fetchGroups = () => {
      console.log(filterWord)
      if (filterWord !== undefined) {
        axios.get(GROUPS_SERVER_URL).then((results) => {
          console.log(results.data)
          const data2 = _.filter(results.data.groups, data => _.some(data.interests, { name: filterWord }))
          console.log(data2)
          this.setState({ groups: data2, filterWords: filterWord })
          console.log(this.state)
        })
      } else {
        axios.get(GROUPS_SERVER_URL).then((results) => {
          console.log(results.data.groups)
          this.setState({ groups: results.data.groups })
          console.log(this.state)
        })
      }
    }
    fetchGroups()
  }

  render () {
    console.log(this.state.filterWords)
    const { groups } = this.state
    console.log(groups)
    return (
      <div className='groupscontainer'>
        {this.state.filterWords !== undefined ? <h2 className='groupsinterestname'>{this.state.filterWords}</h2> : null}
        {groups && groups.map((x) => <div className='groupsdiv'> <Link to={`/groups/${x.id}`} key={x.id} className='grouplink'>{x.name}</Link><span className='groupslocation'>{x.location}</span><span className='groupsdescription'>{x.description}</span> <img src={x.image} height="200" alt='Logo' /></div>)}
      </div>
    )
  }
}

// groups.map where groups.interests == props

export default GroupsApi
