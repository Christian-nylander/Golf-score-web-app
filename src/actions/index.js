import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPost = () => {
    return async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POST', payload: response.data})
  }
};

export const stackTest = (karl) => {
  return {
    type: "TESTAR",
    payload: karl
  }
}
