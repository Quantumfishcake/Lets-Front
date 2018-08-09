import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

const GROUP_SERVER_URL = 'https://backend-lets.herokuapp.com/groups/'
const ROLES_SERVER_URL = 'https://backend-lets.herokuapp.com/roles.json'

class Api extends Component {
  constructor(props) {
    super(props)
    this.state = {
      group: [],
      events: [],
      interests: [],
      user_id: '',
      group_id: ''
    }

    const fetchGroup = () => {
      axios.get(GROUP_SERVER_URL + this.props.id + '.json').then((results) => {
        this.setState({
          group: results.data,
          events: results.data.events,
          interests: results.data.interests
        })
      })
    }
    fetchGroup()
  }

  // _join = (event) => {
  //   event.preventDefault()
  //   this.addUserToGroup(this.state)
  //   this.setState({ user_id: '', group_id: ''})
  // }

  // addUserToGroup(group) {
  //   console.log(this.state)
  //   axios.post(ROLES_SERVER_URL, { user_id: '', group_id: '', admin: false }).then((results) => {
  //     console.log(results.data)
  //   }).catch(function (error) {
  //     console.log(error.response)
  //   })
  // }

  convertdate = (date) => {
    const newDate = date.split('-').reverse().slice(0, -1)
    const arrDates = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const arrDates2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const index1 = arrDates2.indexOf(newDate[1])
    newDate[1] = arrDates[index1]
    return newDate.join('-')
  }






  render () {
    const { group } = this.state
    const { events } = this.state
    const { interests } = this.state
    return (
      <div >
        <div className='groupcontainer'>
          <h2 className='groupname'>{group.name}</h2>
          {/* <button onClick={this._join}>Join</button> */}
          <p className='groupdescription'>{group.description}</p>
          <img src={group.image} alt='Logo' className='groupimage' />
          <h4 className='grouplocation'>Location: {group.location}</h4>
          <h4 className='groupnickname'>For: {group.nickname}'s</h4>
          <h4 className='groupevents'>Upcoming Events: {events.map((x) => <div className='groupeventindividual'><Link to={`/events/${x.id}`} className='groupeventindividualname'>{x.name}</Link><p className='groupeventindividualdate'>{this.convertdate(x.date)}</p><p className='groupeventindividuallocation'>{x.location}</p><p className='groupeventindividualdescription'>{x.description}</p></div>)}</h4>
          <h4 className='groupinterests'> {interests.map((x) => <li><Link to={{ pathname: '/groups', search: `?filterBy=${x.name}` }}>{x.name}</Link></li>)}</h4>
          <Link to={`/groups/${this.props.id}/edit`}>Edit</Link>
          <Link to={{ pathname: '/newevent', state: { group_id: group.id } }}>Create an event</Link>
        </div>
      </div>
    )
  }
}

class Group extends Component {
  render () {
    return (
      <div >
        <Header />
        <Api id={this.props.match.params.id} />

      </div>
    )
  }
}

export default Group
