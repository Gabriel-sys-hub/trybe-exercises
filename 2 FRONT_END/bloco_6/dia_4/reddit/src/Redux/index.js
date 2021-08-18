import { combineReducers } from 'redux';
import { redditReducer } from './reducer';

const rootReducer = combineReducers({ redditReducer })

export default rootReducer;