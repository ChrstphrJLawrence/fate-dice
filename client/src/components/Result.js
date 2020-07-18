import React, {Component} from 'react';
import Dice from './Dice';

class Result extends Component {
    render() {
        const diceComponents = this.props.dice.map((value) => {
            return <Dice value={value} />
        })
        return (
        <div>
            <h2>Results:</h2>
            <h4>{this.props.name} rolled {this.props.total}</h4>
            {diceComponents}
        </div>
        )
    }
}

export default Result;