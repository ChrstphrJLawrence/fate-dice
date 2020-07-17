import React, {Component} from 'react';
import User from './User';

class Room extends Component {

    render() {
        const users = this.props.users;
        console.log(users);
        const userComponents = users.map((user) => {
            console.log(user)
            return <User name={user.name} key={user.id}/>
        })

        return (
            <div>
                <h1>{this.props.name}</h1>
                {userComponents}
            </div>

        )
    }
}

export default Room;