import {
  SAVE_REDDIT,
  GET_ERROR,
} from '../Actions/requisition';

const INITIAL_STATE = {
  data: {},
  loading: true,
  error: {},
}

export const redditReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SAVE_REDDIT:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case GET_ERROR: 
      return { 
        ...state,
        error: action.error,
        loading: false,
      }
    default: 
      return state
}}