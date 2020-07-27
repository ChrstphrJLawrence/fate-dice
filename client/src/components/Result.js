import React, {Component} from 'react';
import ListItem from '@material-ui/core/ListItem';

import Dice from './Dice';

class Result extends Component {
    render() {
        const diceComponents = this.props.dice.map((value) => {
            return <Dice value={value} />
        })
        return (
        <div>
            <ListItem button divider>
                <p>{this.props.name} rolled {this.props.total}  {diceComponents}</p>
            </ListItem>
        </div>
        )
    }
}

export default Result;