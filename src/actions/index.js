import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPosts = () => {
    //bad approaach
    const promise = jsonPlaceholder.get('/posts')

    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};