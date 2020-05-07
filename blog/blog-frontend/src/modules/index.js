import { combineReducers } from 'redux';
import auth from './auth';
const rootReducer = combineReducers({
  auth,
  loading,
});

export default rootReducer;
