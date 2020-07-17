import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <div>
                <h3>User: {this.props.name}</h3>
            </div>
        )
    }
}

export default User;