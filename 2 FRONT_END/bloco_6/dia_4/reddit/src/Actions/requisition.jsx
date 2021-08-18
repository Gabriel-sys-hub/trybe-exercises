export const SAVE_REDDIT = 'SAVE_REDDIT';
export const GET_ERROR = 'GET_ERROR';

const getSubReddit = (payload) => ({
  type: SAVE_REDDIT,
  payload,
  loading: false,
})

const getError = (payload) => ({
  type: GET_ERROR,
  payload,
})

const fetchApi = (text) => async (dispatch) => {
  const getFetch = await fetch(`https://www.reddit.com/r/${text}.json`);
  const getResult = await getFetch.json();
  console.log(getResult)
  try {
    dispatch(getSubReddit(getResult));
  } catch {
    dispatch(getError(getResult));
  }
}

export default fetchApi;