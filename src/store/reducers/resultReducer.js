const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ value: action.counter, id: new Date() })
            }
        case 'CLEAR_RESULT':
            return {
                ...state,
                results: state.results.filter((result) => { return (result.id !== action.id) })
            }
        default:
            return state;
    }

}

export default resultReducer;