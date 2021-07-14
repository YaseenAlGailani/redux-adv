const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD_5':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUB_5':
            return {
                ...state,
                counter: state.counter - action.val
            }
        default:
            return state;
    }

}


export default counterReducer;