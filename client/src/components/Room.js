import React, {Component} from 'react';
import User from './User';
import Roll from './Roll';
import Result from './Result';

class Room extends Component {

    render() {
        const users = this.props.users;
        console.log(users.values());
        const userComponents = Array.from(users, ([key, value]) => {
            return <User name={value.name} key ={key} />
        })

        return (
            <div>
                <h1>{this.props.name}</h1>
                <Roll onRoll={this.props.onRoll} />
                <Result name={this.props.newestResult.name}
                    total={this.props.newestResult.total}
                    dice={this.props.newestResult.dice}
                    key={this.props.newestResult.key} />
                {this.props.currentUser == undefined
                    ? <h4></h4>
                    : <User name={this.props.currentUser.name} 
                    key = {this.props.currentUser.key} 
                    currentUser='true' 
                    onNameChange={this.props.onNameChange} />
                }
                {userComponents}
            </div>
        )
    }
}

export default Room;