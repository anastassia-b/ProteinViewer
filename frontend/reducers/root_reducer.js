import { combineReducers } from 'redux';
import proteinsReducer from './proteins_reducer';
import uiReducer from './ui_reducer';

export default combineReducers({
  proteins: proteinsReducer,
  ui: uiReducer
});

// TODO: give a currentProtein slice of state.
