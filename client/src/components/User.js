import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onNameChange(e.target.value);
    }

    render() {
        return (
            <div>
                {this.props.currentUser
                ? <input type="text" value={this.props.name} onChange={this.handleChange}></input>
                : <h3>User: {this.props.name}</h3>
            }
            </div>
        )
    }
}

export default User;