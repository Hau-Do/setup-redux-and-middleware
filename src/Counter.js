import React from 'react';
import { connect } from 'react-redux';
import { actionDecrement, actionIncrement } from './redux/action';

class Counter extends React.Component {

    decrement = () => {
        console.log('1. this.props: ', this.props);
        this.props.dispatch(actionDecrement('decrease'));
    }

    increment = () => {
        console.log('1. this.props: ', this.props);
        this.props.dispatch(actionIncrement('increase'));
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
                <div>{this.props.textDisplay}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('3. store - state: ', state);
    console.log('============//============');
    return {
        count: state.count,
        textDisplay: state.textDisplay
    };
}

export default connect(mapStateToProps)(Counter);