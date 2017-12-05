import { RECEIVE_PROTEIN, START_LOADING } from '../actions/protein_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentProtein: null,
  loading: false
}

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROTEIN:
      const protein = action.protein;
      const newState = {
        currentProtein: protein.accession,
        loading: false
      }
      return newState;
    case START_LOADING:
      return merge({}, state, { loading: true })
    default:
      return state;
  }
};

export default uiReducer;
