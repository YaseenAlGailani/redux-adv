import updateState from '../utility';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INC_COUNTER':
            return updateState({
                ...state,
                counter: state.counter + 1
            });
            break;
        case 'DEC_COUNTER':
            return updateState({
                ...state,
                counter: state.counter - 1
            });
            break;
        case 'ADD_5':
            return updateState({
                ...state,
                counter: state.counter + action.val
            });
            break;
        case 'SUB_5':
            return updateState({
                ...state,
                counter: state.counter - action.val
            });
            break;
        default:
            return state;
    }
}

export default counterReducer;