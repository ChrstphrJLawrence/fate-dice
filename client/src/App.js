import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import Room from './components/Room';

const io = require('socket.io-client')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {
        name: 'Default Room',
        users: []
      } 
    };
    // this.addRoll = this.addRoll.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (event) {
    this.setState({ [event.target.name] : [event.target.value] });
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:8080');
    this.setState({ socket : socket });
    socket.on('usersUpdate', (data) => {
      console.log(data);
      this.setState({ room: { 
        ...this.state.room, 
        "users" : data.users } })
      console.log(this.state.users)
    });
  }

  // addRoll(event) {
  //   event.preventDefault();
  //   this.state.socket.emit('roll', this.state.Name);
  //   console.log('roll' + this.state.Name);
  // }

  render() {
    const RoomComponent = () => (<Room {...this.state.room}/>)


    return (
      <Router>
        <div>
          <Route exact path="/" render={RoomComponent}/>
        </div>
      </Router>

      /* <div>
        <h2>Rolls:</h2>
        <div>
          <form onSubmit={this.addRoll}>
            <label>Roll!</label>
            <input type="text" name="Name" onChange ={this.handleChange}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div> */
      
    )
  }
}

export default App;
