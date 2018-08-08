import React, { Component } from 'react'
import Header from './Header'
import GroupsApi from './GroupsApi'
import Calendar2 from './Calendar2'

class Groups extends Component {
  render () {
    return (
      <div >
        <Header />
        <Calendar2 />
          <h1>Groups</h1>
          <GroupsApi search={this.props.location.search} />
        
      </div>
    )
  }
}

export default Groups
