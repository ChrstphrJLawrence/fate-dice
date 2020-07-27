import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Roll extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        
    }

    render() {
        return (
        <div>
            <div>
                <form onSubmit={this.props.onRoll}>
                    <Button variant="contained" type="submit">Roll!</Button>
                </form>
            </div>
        </div>
        )
    }
}

export default Roll;