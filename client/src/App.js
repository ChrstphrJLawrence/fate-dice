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
        currentUser: {},
        users: new Map(),
        results: new Array()
      }
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onRoll = this.onRoll.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name] : [event.target.value] });
  }

  onNameChange(name) {
    var _room = {...this.state.room}
    _room.currentUser.name = name;
    this.setState({_room});
    this.state.socket.emit('nameChange', name);
  }

  onRoll(event) {
    event.preventDefault();
    this.state.socket.emit('roll');
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:8080');
    this.setState({ socket : socket });

    socket.on('usersUpdate', (data) => {
      var users = new Map(data.users)
      var thisUser = users.get(socket.id);
      var otherUsers = users;
      otherUsers.delete(socket.id);
      this.setState({ room: { 
        ...this.state.room, 
        "users" : otherUsers,
        "currentUser": thisUser } })
    });

    socket.on('roll', (results) => {
      this.setState({ room: {
        ...this.state.room,
        "results": results
      }})
    })
  }

  render() {
    const RoomComponent = () => (<Room onNameChange={this.onNameChange} onRoll={this.onRoll} {...this.state.room}/>)


    return (
      <Router>
        <div>
          <Route exact path="/" render={RoomComponent}/>
        </div>
      </Router>
    )
  }
}

export default App;
