import React, { Component } from 'react'
import Calendar from 'react-calendar'
import { history } from '../Routes'

class Calendar2 extends Component {
  onChange = (date) => {
    const newDate = date.toLocaleDateString().split('/').reverse().join('-')
    history.push({
      pathname: '/events',
      search: `?filterBy=${newDate}`
    })
  }

  render() {
    const { date } = this.props
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={ date ? new Date(this.props.date) : new Date() }
        />
      </div>
    )
  }
}

export default Calendar2


{/* <Link to={{ pathname: '/groups', search: `?filterBy=${x.name}` }}></Link>)} */ }
// {date: Fri Aug 17 2018 00:00:00 GMT+1000 (Australian Eastern Standard Time), redirect: true}
// date: 2018-08-06