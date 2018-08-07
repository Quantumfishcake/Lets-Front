import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const SERVER_URL = "http://localhost:3000/"



class Newevent extends Component {
  constructor() {
    super();
    this.state = {

      event_id: 0,
      event: {
        group_id: 11,
        name: "",
        description: "",
        image: "",
        location: "",
        time: "",
        date: "",
        capacity: 0
      }
    }

    this._handleNameInput = this._handleNameInput.bind(this)
    this._handleDateInput = this._handleDateInput.bind(this)
    this._handleTimeInput = this._handleTimeInput.bind(this)
    this._handleLocationInput = this._handleLocationInput.bind(this)
    this._handleCapacityInput = this._handleCapacityInput.bind(this)
    this._handleDescriptionInput = this._handleDescriptionInput.bind(this)
    this._handleImageInput = this._handleImageInput.bind(this)
    this._createEvent = this._createEvent.bind(this)
  }

  _handleNameInput(event) {
    this.setState({ event: {...this.state.event, name: event.target.value} })
  }


  _handleDateInput(event) {
    this.setState({event: {...this.state.event, date: event.target.value}})
  }


  _handleTimeInput(event) {
    this.setState({ event: {...this.state.event, time: event.target.value}})
  }


  _handleLocationInput(event) {
    this.setState({event: {...this.state.event, location: event.target.value}})
  }


  _handleCapacityInput(event) {
    this.setState({ event: {...this.state.event, capacity: event.target.value} })
  }


  _handleDescriptionInput(event) {
    this.setState({ event: {...this.state.event, description: event.target.value} })
  }


  _handleImageInput(event) {
    this.setState({ event: {...this.state.event, image: event.target.value} })
  }


  _createEvent(event) {
    event.preventDefault();
    console.log(this.state.event);
    axios.post(SERVER_URL + 'events.json', this.state.event).then( (response) => {
      console.log(response);

      <Redirect to= {{
        pathname: SERVER_URL + 'events/',
        from: this.props.location
    }}/>
    }).catch( (errors) => {
      console.log('returned errors', errors)
    })


  }

  render() {
    return (
      <div>
        <form onSubmit={this._createEvent}>

            <label>
              What :
              <input onChange={this._handleNameInput} ype="text" name="name" value={this.state.event.name} autoFocus></input>
            </label>
              <br></br>
            <label>
              When :
              <input onChange={this._handleDateInput} type="date" name="date" value={this.state.event.date}></input>
              <input onChange={this._handleTimeInput} type="time" name="time" value={this.state.event.time}></input>

            </label>
              <br></br>
            <label>
              Where :
              <input onChange={this._handleLocationInput} type="text" name="location" value={this.state.event.location} autoFocus></input>
            </label>
              <br></br>
            <label>
              Maximum number of attendees :
              <input onChange={this._handleCapacityInput} type="number" name="capacity" value={this.state.event.capacity} autoFocus></input>
            </label>
              <br></br>
            <label>
              Event Description :
              <textarea onChange={this._handleDescriptionInput} type="text" name="description" value={this.state.event.description} rows="10" cols="70" maxLength="800" placeholder="Describe your event in more details here..." required wrap="soft"></textarea>
            </label>
              <br></br>
            <label>
              Upload an event cover image :
              <input onChange={this._handleImageInput} type="text" name="image" value={this.state.event.image} ></input>
              <input onChange={this._handleImageInput} type="file" name="image" value={this.state.event.image} ></input>
            </label>
              <br></br>
            <button type="submit" >Create Event</button>
        </form>
      </div>
    )
  }
}




export default Newevent;
