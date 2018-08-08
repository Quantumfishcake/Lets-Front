import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import { Link } from 'react-router-dom';
import url from 'url'
import Calendar2 from './Calendar2'
import _ from 'lodash'

const SERVER_URL = "https://backend-lets.herokuapp.com/"

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: []
    }
    axios.get(SERVER_URL + 'events.json').then(events => {
      this.setState({
        events: events.data.events
      })
    })
  }
  render () {
    const { location } = this.props
    const { events } = this.state
    const date = url.parse(location.search, true).query.filterBy
    const eventsFiltered = location.search == '' ? events : _.filter(events, { date })
   
    console.log(location)

    return (
      <div>
        <Header />
        <h1>Events Page here</h1>
        <Calendar2 date={date} />
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

              state: { from: this.props.location }
            }
          }>Create a new Event</Link>
          
          {eventsFiltered.map(event => {
            
            return (
              <div>
                <h3>
                  {event.name}
                </h3>
                <h4>Where : {event.location}</h4>
                <p>Description : {event.description}</p>
                <p>event_id : {event.id}</p>
                <p>date: {event.date}</p>
                <p>More details : <Link to={{ pathname: '/events/' + event.id }} >{event.name}</Link></p>
              </div>
            )
          })}

        </div>

    )
  }
}


export default Events;
