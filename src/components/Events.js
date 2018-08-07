<<<<<<< HEAD
import React, { Component } from 'react'

class Events extends Component {
  render () {
    return (
      <div />
=======
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SERVER_URL = "http://localhost:3000/"


class Events extends Component {
  constructor() {
    super();
    this.state = {
      events:  []
    }

    const fetchEvents = () => {
      axios.get(SERVER_URL+'events.json').then( events => {

        this.setState({
          events: events.data.events
        })

      }).catch( (errors) => {
        console.log(errors);
      })
    }

    fetchEvents();
  }



  render() {
    return (
      <div>
        <h1>Events Page here</h1>
        <div>
          {this.state.events.map( event => {
          return (

          <div>
            <h3>
              {event.name}
            </h3>
            <h4>Where : {event.location}</h4>
            <p>Description : {event.description}</p>
            <p>event_id : {event.id}</p>
            <p>More details : <Link to={{pathname: '/events/' + event.id}} >{event.name}</Link></p>
          </div>
        )
        })  }
        </div>
      </div>
>>>>>>> 3baffc628ed3de17aadf924db651c8adaac752b7
    )
  }
}

<<<<<<< HEAD
export default Events
=======

export default Events;
>>>>>>> 3baffc628ed3de17aadf924db651c8adaac752b7
