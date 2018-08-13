import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const INTERESTS_SERVER_URL = 'https://backend-lets.herokuapp.com/interests.json'

class Interests extends Component {
  constructor (props) {
    super(props)
    this.state = {
      interests: []
    }

    const fetchInterests = () => {
      axios.get(INTERESTS_SERVER_URL).then((results) => {
        this.setState({ interests: results.data })
      })
    }
    fetchInterests()
  }

  render () {
    const { interests } = this.state
    return (
      <div className='categorycontainer'>

        {interests && interests.interests && interests.interests.map((x) => <Link onClick={this.forceUpdate} to={{ pathname: '/groups', search: `?filterBy=${x.name}` }}> <span className='card' style={{ 'display': 'block' }}>
          <div className={x.name} /><span style={{ 'text-decoration': 'none' }} className='tile'>{x.name}</span>
        </span></Link>)}

      </div>
    )
  }
}

export default Interests
