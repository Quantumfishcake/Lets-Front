import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import { Link } from 'react-router-dom';

const SERVER_URL = "https://backend-lets.herokuapp.com/"


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
        <Header />
        <h1 className="nextevent">Upcoming Events</h1>
        <div>
          <div className="create">
          <Link to={
            {
              pathname: '/newevent/',
              state: {from: this.props.location}
          }
        }>Create a new Event</Link> </div>
          {this.state.events.map( event => {
          return (

          <div className="container">

            <h3 className="eventtitle">
              <Link to={{pathname: '/events/' + event.id}} >{event.name}</Link>
            </h3>
                <p>{event.description}</p>

          </div>
        )
        })  }
        </div>
      </div>
    )
  }
}


export default Events;
