import {
  RECEIVE_PROTEIN, START_LOADING, RECEIVE_ERRORS
} from '../actions/protein_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentProtein: null,
  loading: false,
  errors: null
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROTEIN:
      const protein = action.protein;
      const newState = {
        currentProtein: protein.accession,
        loading: false,
        errors: null
      };
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors, loading: false });
    case START_LOADING:
      return merge({}, state, { loading: true, errors:  null });
    default:
      return state;
  }
};

export default uiReducer;
