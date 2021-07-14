import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counterReducer';
import resultReducer from './store/reducers/resultReducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    ctr: counterReducer,
    rslt: resultReducer
});


const logger = storeAPI => (next) => (action) => {
    console.log('[Middleware]: Hi from the middleware.')
    console.log('[Middleware]: action requested is: ' + action.type);
    console.log('[Middleware]: state before: ', storeAPI.getState());
    const result = next(action);
    console.log('[Middleware]: state after: ', storeAPI.getState());
    return result;
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
