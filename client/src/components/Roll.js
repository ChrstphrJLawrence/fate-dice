import React, {Component} from 'react';

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
            <h2>Rolls:</h2>
            <div>
                <form onSubmit={this.props.onRoll}>
                    <input type="submit" value="Roll" />
                </form>
            </div>
        </div>
        )
    }
}

export default Roll;