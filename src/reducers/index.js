import { combineReducers } from 'redux';
import ReducerComments from './reducer_comments';

const rootReducer = combineReducers({
  comments: ReducerComments
});

export default rootReducer;
