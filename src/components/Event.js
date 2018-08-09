import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import Calendar2 from './Calendar2'
import { Link } from 'react-router-dom';


const SERVER_URL = "https://backend-lets.herokuapp.com/"



class Event extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: {},
      event_id: this.props.match.params.id,
      users: [],
      group: {}
    }


    const fetchEvent = () => {
      let url = SERVER_URL + 'events/' + this.state.event_id + '.json';


      axios.get(url).then(event => {
        console.log(event);
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


  render() {
    return (
        <div >
        <Header />
        <Calendar2 />

        <h2>{this.state.event.name}</h2>
        <p>on {this.state.event.date} at {this.state.event.time}</p>
        <h4>Venue : {this.state.event.location}</h4>
        <p> {this.state.users.length} {this.state.group.nickname}s going</p>
        <hr></hr>

        <p>Info : {this.state.event.description}</p>

      </div>
    )
  }
}

export default Event
