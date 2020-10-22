import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import 'fontsource-roboto';
import Room from './components/Room';

const io = require('socket.io-client')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {
        name: 'WIZARDS!',
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
    const socket = io.connect();
    this.setState({ socket : socket });

    socket.on('connect', () => {
      if (this.state.room.currentUser.hasOwnProperty('name')) {
        this.state.socket.emit('nameChange', this.state.room.currentUser.name);
      }
      this.setState(prevState => {
        prevState.room.currentUser.id = socket.id;
        return prevState;
      })
    })

    socket.on('usersUpdate', (data) => {
      var users = new Map(data.users)
      var thisUser = users.get(socket.id);
      var otherUsers = users;
      otherUsers.delete(socket.id);
      if (!this.state.room.currentUser.hasOwnProperty('name')) {
        this.setState(prevState => {
          prevState.room.currentUser = thisUser;
          return prevState;
        })
      }
      this.setState({ room: { 
        ...this.state.room, 
        "users" : otherUsers} })
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
