import React, {Component} from 'react';
import {faPlusSquare, faMinusSquare, faSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Dice extends Component {
    render() {
        return (
            <Icon value={this.props.value}/>
        )
    }
}

function Icon(props) {
    if (props.value === -1) {
        return <FontAwesomeIcon icon={faMinusSquare} size='lg' />
    } else if (props.value === 0) {
        return <FontAwesomeIcon icon={faSquare} size='lg' />
    } else if (props.value === 1) {
    return <FontAwesomeIcon icon={faPlusSquare} size='lg'/>
}
}

export default Dice;