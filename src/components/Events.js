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
      axios.get(SERVER_URL+'events.json').then( (events) => {

        this.state.events = events.data.events

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
          {this.state.events.map( (event) => {
          return (
            <p>{event}</p>
          // <div>
          //     <p>event here</p>
          //   <h3>
          //     {event.name}
          //   </h3>
          //   <h4>Where : {event.location}</h4>
          //   <p>Description : {event.description}</p>
          // </div>
        )
        })  }
        </div>
      </div>
    )
  }
}


export default Events;
