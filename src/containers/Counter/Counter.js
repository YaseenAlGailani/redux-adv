import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions/index';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.cntr} />
                <CounterControl label="Increment" clicked={this.props.incCounterHandler} />
                <CounterControl label="Decrement" clicked={this.props.decCounterHandler} />
                <CounterControl label="Add 5" clicked={this.props.add5Handler} />
                <CounterControl label="Subtract 5" clicked={this.props.sub5Handler} />
                <div>
                    <button onClick={() => this.props.onStoreResult(this.props.cntr)}>Store Result</button>
                </div>
                <ul style={{ listStyle: 'none', paddingleft: 0, display: 'block' }}>
                    {this.props.results.map(result =>
                        <li onClick={() => this.props.onClearResult(result.id)} style={{ padding: '15px', border: 'solid 1px #eee' }} key={result.id}>{result.value}</li>
                    )}
                </ul>
            </div>
        );
    }
}


// Connect component to redux store

export default connect(
    (state) => {
        return {
            cntr: state.ctr.counter,
            results: state.rslt.results
        }
    },
    (dispatch) => {
        return {
            incCounterHandler: () => dispatch(actions.increment()),
            decCounterHandler: () => dispatch(actions.decrement()),
            add5Handler: () => dispatch(actions.addNum(5)),
            sub5Handler: () => dispatch(actions.subNum(5)),
            onStoreResult: (counter) => dispatch(actions.storeResult(counter)),
            onClearResult: (id) => { setTimeout(() => { dispatch(actions.clearResult(id)) }, 1000) }
        }
    })(Counter);