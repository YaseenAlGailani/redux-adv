const redux = require('redux');

const initialState = { counter: 0 }

const counterReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type == 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
}

const store = redux.createStore(counterReducer);

// subscription
store.subscribe(() => {
    return console.log('[Subscription]',store.getState());
})


// dispatcher
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });

console.log(store.getState())