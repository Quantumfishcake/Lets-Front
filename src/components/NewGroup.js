import React, { Component } from 'react';
import axios from 'axios'


const GROUPS_SERVER_URL = 'http://localhost:3000/groups.json'


class NewGroup extends Component {

  constructor () {
    super ()
     this.state = {name: '', description: '', location: '', image: '', nickname: ''}
     this._handleChangeName = this._handleChangeName.bind(this)
     this._handleChangeDescription = this._handleChangeDescription.bind(this)
     this._handleChangeLocation = this._handleChangeLocation.bind(this)
     this._handleChangeImage = this._handleChangeImage.bind(this)
     this._handleChangeNickname = this._handleChangeNickname.bind(this)
     this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleChangeName(event){
    this.setState({name: event.target.value})
    console.log(this.state);
    }
  _handleChangeDescription(event){
    this.setState({description: event.target.value})
    console.log(this.state);
    }
  _handleChangeLocation(event){
    this.setState({location: event.target.value})
    console.log(this.state);
    }
  _handleChangeImage(event){
    this.setState({image: event.target.value})
    console.log(this.state);
    }
  _handleChangeNickname(event){
    this.setState({nickname: event.target.value})
    console.log(this.state);
    }


    createNewGroup(group){
  console.log(this.state);

console.log(axios.post(GROUPS_SERVER_URL, {name: 'tom', description: 'dsaasdasdas'}));
  axios.post(GROUPS_SERVER_URL, {name: group.name, description: group.description}).then((results) => {
    console.log(results.data);
// this.setState({reservedSeats: [results.data.seat, ...this.state.reservedSeats]})

    }).catch(function (error) {
    console.log(error.response);
  });
}

  _handleSubmit(event){
    event.preventDefault()
    this.createNewGroup(this.state)
    // this.setState({seat: ''})
  }




  render() {
    return (
      <div >
      <h1>New Group</h1>
      <form onSubmit={this._handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" onChange={this._handleChangeName} value={this.state.name} />
              </label>
              <label>
                Description:
                <input type="text" name="name"  onChange={this._handleChangeDescription} value={this.state.description}/>
              </label>
              <label>
                Location:
                <input type="text" name="name"  onChange={this._handleChangeLocation} value={this.state.location}/>
              </label>
              <label>
                Image:
                <input type="text" name="name"  onChange={this._handleChangeImage} value={this.state.image}/>
              </label>
              <label>
                Nicknames:
                <input type="text" name="name"  onChange={this._handleChangeNickname} value={this.state.nickname}/>
              </label>
            <input type="submit" value="Search" className="button" />

            </form>
      </div>
    );
  }
}

export default NewGroup;
