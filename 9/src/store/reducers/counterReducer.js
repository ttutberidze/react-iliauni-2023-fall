const initialState = {
    value: 0
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE':
            return {
                ...state,
                value: state.value + action.payload.value
            }
        default: return state;
    }
}