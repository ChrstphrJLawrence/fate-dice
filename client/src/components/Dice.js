import React, {Component} from 'react';

class Dice extends Component {
    render() {
        return (
            <div>[{this.props.value}]</div>
        )
    }
}

export default Dice;