import React, {Component} from 'react';
import User from './User';

const io = require('socket.io-client');

class UsersList extends Component {
    state = {
        users: []
    }

    // componentDidMount() {
    //     const socket = io.connect('http://localhost:8080');
    //     this.setState({ socket: socket });
    //     socket.on('usersUpdate', (data) => {
    //         //this.setState({users: data})
    //         console.log('USER COMP: ' + data)
    //     });
    // }
    render() {
        const userComponents = this.state.users.map((user) => {
            return <User user={user} key={user.id}/>
        })
        return (
            <div>
                <h3>Users: {this.props.name}</h3>
                {userComponents}
            </div>
        )
    }
}

export default UsersList;