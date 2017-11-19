import { combineReducers } from 'redux';
import proteinsReducer from './proteins_reducer';

export default combineReducers({
  proteins: proteinsReducer
});

// TODO: give a currentProtein slice of state. 
