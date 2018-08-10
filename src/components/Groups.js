import React, { Component } from 'react'
import Header from './Header'
import GroupsApi from './GroupsApi'
import Interests from './Interests'

class Groups extends Component {
  render () {
    return (
      <div >
        <Header />
        <h1>Groups</h1>
        <GroupsApi search={this.props.location.search} />
        <div className='interestsgroupscontainer'>
          <h1>Categories</h1>
          <Interests />
        </div>

      </div>
    )
  }
}

export default Groups
