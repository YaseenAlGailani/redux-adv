export const storeResult = (counter) => {
    return dispatch => {
        setTimeout(
            () => { dispatch({ type: 'STORE_RESULT', counter: counter }) }
            , 2000);
    }
}

export const clearResult = (id) => {
    return { type: 'CLEAR_RESULT', id: id };
}