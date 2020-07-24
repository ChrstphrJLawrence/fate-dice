import React, {Component} from 'react';
import User from './User';
import Roll from './Roll';
import Result from './Result';

class Room extends Component {

    render() {
        const users = this.props.users;
        const userComponents = Array.from(users, ([key, value]) => {
            return <User name={value.name} key ={key} />
        })
        const results = this.props.results;
        console.log(results);
        const resultsComponents = results.map(result => {
            return <Result name={result.name} total={result.total} 
                            dice={result.dice} key = {result.key} />
        });

        return (
            <div>
                <h1>{this.props.name}</h1>
                <Roll onRoll={this.props.onRoll} />
                {this.props.currentUser === undefined
                    ? <h4></h4>
                    : <User name={this.props.currentUser.name} 
                    key = {this.props.currentUser.key} 
                    currentUser='true' 
                    onNameChange={this.props.onNameChange} />
                }
                <h2>Results:</h2>
                <div>{resultsComponents}</div>
                <h2>Users:</h2>
                <div>{userComponents}</div>
            </div>
        )
    }
}

export default Room;