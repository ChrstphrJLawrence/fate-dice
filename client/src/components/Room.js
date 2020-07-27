import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

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
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <h1>{this.props.name}</h1>
                    </Grid>
                <Grid item xs={12} sm={6}>
                    <Roll onRoll={this.props.onRoll} />
                    <h2>Results:</h2>
                    <div>{resultsComponents}</div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h2>Users:</h2>
                    {this.props.currentUser === undefined
                        ? <h4></h4>
                        : <User name={this.props.currentUser.name} 
                        key = {this.props.currentUser.key} 
                        currentUser='true' 
                        onNameChange={this.props.onNameChange} />
                    }
                    <div>{userComponents}</div>
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default Room;