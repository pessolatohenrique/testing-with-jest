import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <h2>Você tem { this.props.count * 3 } counters</h2>
            </div>
        )
    }
}

export default Counter;