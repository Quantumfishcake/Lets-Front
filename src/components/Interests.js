import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { history } from '../Routes'

const INTERESTS_SERVER_URL = 'https://backend-lets.herokuapp.com/interests.json'

class Interests extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interests: []
    }

    const fetchInterests = () => {
      console.log(INTERESTS_SERVER_URL)
      axios.get(INTERESTS_SERVER_URL).then((results) => {
        this.setState({ interests: results.data })
        console.log(results.data)
      })
    }
    fetchInterests()
  }

  render() {
    console.log(this.state.interests)
    const { interests } = this.state
    console.log(interests)
    console.log(interests.interests)
    return (
      <div className='categorycontainer'>

        {interests && interests.interests && interests.interests.map((x) => <Link onClick={this.forceUpdate} to={{ pathname: '/groups', search: `?filterBy=${x.name}` }}> <span className='card' style={{ 'display': 'block' }}>
          <div className={x.name}></div><span style={{ 'text-decoration': 'none' }} className='tile'>{x.name}</span>
        </span></Link>)}

      </div>
    )
  }
}

export default Interests
