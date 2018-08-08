import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
import { Link } from 'react-router-dom';
import url from 'url'
import _ from 'lodash'

const SERVER_URL = "https://backend-lets.herokuapp.com/"


class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    console.log(this.props)
    const searchfield = url.parse(this.props.location.search, true).query
    console.log(searchfield)
    const filterWord = searchfield.filterBy



    const fetchEvents = () => {
      if (filterWord !== undefined) {
        axios.get(SERVER_URL + 'events.json').then(events => {
          console.log(filterWord)
          console.log(typeof filterWord)
          const data2 = _.filter(events.data.events, {date: filterWord})
          console.log(events.data.events[0].date)
          console.log(data2)
          this.setState({
            events: data2
          })

        }).catch((errors) => {
          console.log(errors);
        })
      }
      else {
        axios.get(SERVER_URL + 'events.json').then(events => {

          this.setState({
            events: events.data.events
          })

        }).catch((errors) => {
          console.log(errors);
        })
      }
    }
    fetchEvents();
  }



  render() {
    return (
      <div>
        <Header />
        <h1>Events Page here</h1>
        <div>
          <Link to={
            {
              pathname: '/newevent/',
              state: { from: this.props.location }
            }
          }>Create a new Event</Link>
          {this.state.events.map(event => {
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
      </div>
    )
  }
}


export default Events;
