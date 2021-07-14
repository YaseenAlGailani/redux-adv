export const increment = () => {
    return { type: 'INC_COUNTER' };
}

export const decrement = () => {
    return { type: 'DEC_COUNTER' };
}

export const addNum = (num) => {
    return { type: 'ADD_5', val: num };
}

export const subNum = (num) => {
    return { type: 'SUB_5', val: num };
}

  