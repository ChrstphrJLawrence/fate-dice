import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';

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
                <ListItem button divider>
                {this.props.currentUser
                ? <div>Your Name: 
                    <input type="text" value={this.props.name} onChange={this.handleChange}></input>
                </div>
                : <h3>{this.props.name}</h3>
            }
            </ListItem>
            </div>
        )
    }
}

export default User;