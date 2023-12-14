const initialState = {
    state: 'INITIAL', // INITIAL | LOADING | SUCCESS | ERROR
    data: [],
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'POSTS_FETCH_REQUEST':
            return {
                ...state,
                data: [],
                error: null,
                state: 'LOADING'
            }
        case 'POSTS_FETCH_SUCCESS':
            return {
                ...state,
                data: action.payload,
                state: 'SUCCESS'
            }
        case 'POSTS_FETCH_ERROR':
            return {
                ...state,
                error: action.payload,
                state: 'ERROR'
            }
        default: return state;
    }
}