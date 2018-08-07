import React, { Component } from 'react'
import Header from './Header'
import GroupsApi from './GroupsApi'

class Groups extends Component {
  render () {
    return (
      <div >
        <Header />
        <h1>Groups</h1>
        <GroupsApi search={this.props.location.search} />
      </div>
    )
  }
}

export default Groups
