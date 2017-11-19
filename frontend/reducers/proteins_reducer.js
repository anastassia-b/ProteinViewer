import { RECEIVE_PROTEIN } from '../actions/protein_actions';
import merge from 'lodash/merge';

const proteinsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PROTEIN:
      const protein = action.protein;
      return merge({}, state, { [protein.accession]: protein });
    default:
      return state;
  }
};

export default proteinsReducer;
