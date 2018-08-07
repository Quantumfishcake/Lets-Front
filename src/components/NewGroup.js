import React, { Component } from 'react'
import axios from 'axios'

const GROUPS_SERVER_URL = 'http://localhost:3000/groups.json'

class NewGroup extends Component {
  constructor () {
    super()
    this.state = {name: '', description: '', location: '', image: '', nickname: ''}
  }

  handleChange = (name) => (event) => this.setState({[name]: event.target.value})

  createNewGroup (group) {
    console.log(this.state)

    axios.post(GROUPS_SERVER_URL, {name: group.name, description: group.description, image: group.image, location: group.location, nickname: group.nickname}).then((results) => {
      console.log(results.data)
      // this.setState({reservedSeats: [results.data.seat, ...this.state.reservedSeats]})
    }).catch(function (error) {
      console.log(error.response)
    })
  }

  _handleSubmit (event) {
    event.preventDefault()
    this.createNewGroup(this.state)
    // this.setState({seat: ''})
  }

  render () {
    return (
      <div >
        <h1>New Group</h1>
        <form onSubmit={this._handleSubmit}>
          <label>
            Name:
            <input type='text' name='name' onChange={this.handleChange('name')} value={this.state.name} />
          </label>
          <label>
              Description:
            <input type='text' name='name' onChange={this.handleChange('description')} value={this.state.description} />
          </label>
          <label>
            Location:
            <input type='text' name='name' onChange={this.handleChange('location')} value={this.state.location} />
          </label>
          <label>
            Image:
            <input type='text' name='name' onChange={this.handleChange('image')} value={this.state.image} />
          </label>
          <label>
            Nicknames:
            <input type='text' name='name' onChange={this.handleChange('nickname')} value={this.state.nickname} />
          </label>
          <input type='submit' value='Search' className='button' />

        </form>
      </div>
    )
  }
}

export default NewGroup
