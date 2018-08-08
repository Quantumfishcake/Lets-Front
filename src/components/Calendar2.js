import React, { Component } from 'react'
import Calendar from 'react-calendar'
import { Redirect } from 'react-router'

class Calendar2 extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      redirect: false,
      newDate: ''
    }
  }

onChange = (date) => {
  const newDate = date.toLocaleDateString().split('/').reverse().join('-')
  this.setState({newDate: newDate, redirect: true})
  console.log(this.state)
}

render() {
  const { redirect } = this.state;
  if (redirect) {
    return <Redirect to={{
      pathname: "/events",
      search: `?filterBy=${this.state.newDate}`,
    }}/>;
  }
  return (
    <div>
      <Calendar
        onChange={this.onChange}
        value={this.state.date}
      />
    </div>
  )
}
}

export default Calendar2


{/* <Link to={{ pathname: '/groups', search: `?filterBy=${x.name}` }}></Link>)} */ }
// {date: Fri Aug 17 2018 00:00:00 GMT+1000 (Australian Eastern Standard Time), redirect: true}
// date: 2018-08-06