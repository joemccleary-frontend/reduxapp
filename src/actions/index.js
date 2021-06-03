import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    const response = jsonPlaceholder.get('/posts')

    dispatch ({type: 'FETCH_POSTS', payload: response.data});
};