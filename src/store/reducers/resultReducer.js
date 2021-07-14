import updateState from '../utility';
const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'STORE_RESULT':
            return updateState({
                ...state,
                results: state.results.concat({ value: action.counter, id: new Date() })
            });
            break;
        case 'CLEAR_RESULT':
            return updateState({
                ...state,
                results: state.results.filter((result) => { return (result.id !== action.id) })
            });
            break;
        default:
            return state;
    }

}

export default resultReducer;