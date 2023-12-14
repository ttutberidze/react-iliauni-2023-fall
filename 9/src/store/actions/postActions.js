import {privateApi} from '../../api/axios';

const postsFetchRequest = () => ({
    type: 'POSTS_FETCH_REQUEST'
})

const postsFetchSuccess = (data) => ({
    type: 'POSTS_FETCH_SUCCESS',
    payload: data
})

const postsFetchError = (error) => ({
    type: 'POSTS_FETCH_ERROR',
    payload: error
})

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            dispatch(postsFetchRequest());
            const data = await privateApi.get('/posts');
            dispatch(postsFetchSuccess(data))
        } catch(error) {
            dispatch(postsFetchError(error.message))
        }
    }
}