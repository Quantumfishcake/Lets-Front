import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import Calendar2 from './Calendar2'

const SERVER_URL = "https://backend-lets.herokuapp.com/"

class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      event: {},
      event_id: this.props.match.params.id,
      users: [],
      group: {},
    }

    const fetchEvent = () => {
      let url = SERVER_URL + 'events/' + this.state.event_id + '.json';
      axios.get(url).then(event => {
        console.log(event.data)
        this.setState({
          event: event.data,
          users: event.data.users,
          group: event.data.group
        })
      }).catch((errors) => {
        console.log(errors);
      })
    }
    fetchEvent();
  }

  render () {
    return (
        <div >
        <Header />
        <div className="row">
        <h2>{this.state.event.name}</h2>
        <p>Date {this.state.event.date} at {this.state.event.time}</p>
        <h4>At : {this.state.event.location}</h4>
        <p> {this.state.users.length} {this.state.group.nickname}s going</p>
        <hr />

        <p>Info : {this.state.event.description}</p>
      </div>
      </div>
    )
  }
}

export default Event
