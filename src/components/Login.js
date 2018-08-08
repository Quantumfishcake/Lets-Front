import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

const LOGIN_SERVER_URL='http://localhost:3000/users/'

class LogIn extends Component {
  constructor() {
    super()
    this.state={

      user_info: {
        email: '',
        password: ''}
     }
     this._handleEmailInput=this._handleEmailInput.bind(this)
     this._handlePasswordInput=this._handlePasswordInput.bind(this)
}


_handleEmailInput(e) {
  this.setState({
    user_info: { ...this.state.user_info, email: e.target.value }
  })

}

_handlePasswordInput(e) {
  this.setState({
    user_info: { ...this.state.user_info, password: e.target.value}
  })
}

_handleSubmit(e) {


 }


  render() {
    return(
      <div>
        <form onSubmit={this._handleSubmit}>
          <label>
            Email:
            <input onChange={this._handleEmailInput} type="text" name="email" value={this.state.user_info.email} autoFocus></input>
          </label>
          <label>
            Password:
            <input onChange={this._handlePasswordInput} type="password" name="password" value={this.state.user_info.password} ></input>
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
}




export default LogIn
