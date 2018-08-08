import React, {Component} from 'react'
import axios from 'axios'

const USER_SERVER_URL = 'http://localhost:3000/users/'

class User extends Component {
  constructor(props){
    super(props);
    this.state = {  };

    const fetch_user = () => {
      let url = USER_SERVER_URL + this.props.match.params.id + '.json';
      axios.get(url).then( (result) => {
        console.log(
          result.data
        );
    }).catch( (errors) => {
      console.log(errors);
    })
  };

  fetch_user();
}
  render( ) {

      return(
      <div className="user">
        <h1>{this.props.match.params.user}</h1>
      </div>
    );
  }
}

export default User;
