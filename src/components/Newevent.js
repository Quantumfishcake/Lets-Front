import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from './Header'
import { history } from '../Routes'

const SERVER_URL = 'https://backend-lets.herokuapp.com/'



class Newevent extends Component {
  constructor(props) {
    super(props);
    this.state = {

      event_id: 0,
      event: {
        group_id: props.history.location.state.group_id,
        name: '',
        description: '',
        image: '',
        location: '',
        time: '',
        date: '',
        capacity: 0,
        redirect: false
      }
    }
    console.log(props.history.location.state.group_id)
    this._handleNameInput = this._handleNameInput.bind(this)
    this._handleDateInput = this._handleDateInput.bind(this)
    this._handleTimeInput = this._handleTimeInput.bind(this)
    this._handleLocationInput = this._handleLocationInput.bind(this)
    this._handleCapacityInput = this._handleCapacityInput.bind(this)
    this._handleDescriptionInput = this._handleDescriptionInput.bind(this)
    this._handleImageInput = this._handleImageInput.bind(this)
    this._createEvent = this._createEvent.bind(this)
    axios.defaults.headers.common = { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') }
  }

  _handleNameInput(event) {
    this.setState({ event: { ...this.state.event, name: event.target.value } })
  }


  _handleDateInput(event) {
    this.setState({ event: { ...this.state.event, date: event.target.value } })
  }


  _handleTimeInput(event) {
    this.setState({ event: { ...this.state.event, time: event.target.value } })
  }


  _handleLocationInput(event) {
    this.setState({ event: { ...this.state.event, location: event.target.value } })
  }


  _handleCapacityInput(event) {
    this.setState({ event: { ...this.state.event, capacity: event.target.value } })
  }


  _handleDescriptionInput(event) {
    this.setState({ event: { ...this.state.event, description: event.target.value } })
  }


  _handleImageInput(event) {
    this.setState({ event: { ...this.state.event, image: event.target.value } })
  }


  _createEvent(event) {
    event.preventDefault();
    console.log(this.state.event);
    localStorage.getItem('jwt') == null ? false : axios.post(SERVER_URL + 'events.json', { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('jwt') } }, { data: this.state.event }).then((response) => {
      console.log(response);
      history.push({
        pathname: '/groups'
      })
    }).catch((errors) => {
      console.log('returned errors', errors)
    })


  }

  render() {
    return (
      <div className='newevent'>
        <Header />
        <div className='createevent'>
          <h1> Create an event</h1>
          <div className='containerevent'>
            <form onSubmit={this._createEvent}>
              <ul>
                <li><label>
                  Name of the event  <input onChange={this._handleNameInput} type='text' name='name' value={this.state.event.name} autoFocus></input>
                </label></li>
                <br></br>
                <li><label>
                  Date/Time
                <input onChange={this._handleDateInput} type='date' name='date' value={this.state.event.date}></input>
                  <input onChange={this._handleTimeInput} type='time' name='time' value={this.state.event.time}></input>

                </label></li>
                <br></br>
                <li><label>
                  Location
                  <input onChange={this._handleLocationInput} type='text' name='location' value={this.state.event.location} autoFocus></input>
                </label></li>
                <br></br>
                <li><label>
                  Number of attendees
                <input onChange={this._handleCapacityInput} type='number' name='capacity' value={this.state.event.capacity} autoFocus></input>
                </label></li>
                <br></br>
                <li><label>
                  Description<br></br>
                  <textarea onChange={this._handleDescriptionInput} type="text" name="description" value={this.state.event.description} rows="10" cols="70" maxLength="800" placeholder="Describe your event in more details here..." required wrap="soft"></textarea>
              </label></li>
              <br></br>
              <li><label>
                Upload an event cover image
                  <input onChange={this._handleImageInput} type="text" name="image" value={this.state.event.image} ></input>
                </label></li>
                <br></br>
                <button type='submit' >Create Event</button>
              </ul>
            </form>
          </div>
        </div>
      </div>


    )
  }
}




export default Newevent;
