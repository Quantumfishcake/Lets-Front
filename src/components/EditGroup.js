import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import { Redirect } from 'react-router'
import _ from 'lodash'

const GROUP_SERVER_URL = 'https://backend-lets.herokuapp.com/groups/'
const INTEREST_SERVER_URL = 'https://backend-lets.herokuapp.com/interests.json'

class EditGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      description: '',
      location: '',
      image: '',
      nickname: '',
      interests: [],
      allInterests: [],
      redirect: false,
      btn1: true
    }
    this._handleSubmit = this._handleSubmit.bind(this)
    this._addInterest = this._addInterest.bind(this)

    const fetchGroup = () => {
      axios.get(GROUP_SERVER_URL + +(this.props.match.params.id) + '.json').then((results) => {
        const interests = results.data.interests.map((x) => x.id)
        console.log(interests)
        this.setState({
          id: results.data.id,
          name: results.data.name,
          description: results.data.description,
          location: results.data.location,
          image: results.data.image,
          nickname: results.data.nickname,
          interests: results.data.interests
        })
        console.log(this.state)
      })
    }
    fetchGroup()

    const fetchInterests = () => {
      axios.get(INTEREST_SERVER_URL).then((results) => {
        console.log(results.data)
        this.setState({
          allInterests: results.data.interests
        })
        console.log(this.state)
      })
    }
    fetchInterests()
  }

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value })
    console.log(this.state)
  }

  editGroup(group) {
    console.log('editGroup', this.state)
    localStorage.getItem('jwt') == null ? false : axios.patch((GROUP_SERVER_URL + +(this.props.match.params.id) + '.json'), {headers:{"Authorization": 'Bearer ' + localStorage.getItem('jwt')}}, {data:{ id: group.id, name: group.name, description: group.description, image: group.image, location: group.location, nickname: group.nickname, interest_ids: group.interests.map((i) => i.id) }}).then((results) => {
      console.log('editGroup axios results', results.data)
      this.setState({ redirect: true })
    }).catch(function (error) {
      console.log(error.response)
    })
  }

  _handleSubmit(event) {
    event.preventDefault()
    this.editGroup(this.state)

  }

  _addInterest(event) {
    console.log(this.state.allInterests)
    const interest = _.filter(this.state.allInterests, { id: +(event.target.value) })
    console.log(interest)
    event.preventDefault()
    const currentInterests = this.state.interests
    this.setState({ interests: currentInterests.concat(interest), btn1: !this.state.btn1 })
    console.log(this.state)
  }




  render() {
    let btn_class = this.state.btn1 ? "blackButton" : "whiteButton";
    const { show } = this.state;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/groups' />;
    }
    return (

      <div >
        <Header />
        <h1>Edit Group</h1>
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

          {this.state.allInterests.map((x) => <button type="button" className={btn_class} onClick={this._addInterest} value={x.id}>{x.name}</button>)}

          <input type='submit' value='Create' className='button' onClick={this._handleSubmit} />

        </form>
      </div>
    )
  }
}

export default EditGroup