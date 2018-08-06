import React, { Component } from 'react';
import axios from 'axios'
import Header from './Header'
import { Link } from 'react-router-dom'

const INTERESTS_SERVER_URL = 'http://localhost:3000/interests.json'

class Interests extends Component {
  constructor (props) {
    super (props)
    this.state = {
      interests: []
    }

    const fetchInterests = () => {
      console.log(INTERESTS_SERVER_URL);
      axios.get(INTERESTS_SERVER_URL).then((results) => {
        this.setState({interests: results.data})
        console.log(results.data);

      })
    }
    fetchInterests()

  }

  render() {
    console.log(this.state.interests);
    const { interests } = this.state;
    console.log(interests);
    console.log(interests.interests);
    return (
      <div >

        {interests &&  interests.interests && interests.interests.map((x) => <p><Link to={{pathname: '/groups', search: `?filterBy=${x.name}`}}>{x.name}</Link></p>)}



      </div>
    );
  }
}

export default Interests;
