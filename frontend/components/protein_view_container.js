import { connect } from 'react-redux';
import ProteinView from './protein_view';
import { requestProtein } from '../actions/protein_actions';
import { selectProteinInfo } from '../reducers/selectors';

const mapStateToProps = state => {
  const proteinAccession = state.ui.currentProtein;
  const selectedInfo = selectProteinInfo(state, proteinAccession);
  return {
    protein: selectedInfo,
    loading: state.ui.loading
  }
};

const mapDispatchToProps = dispatch => ({
  requestProtein: (id) => dispatch(requestProtein(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProteinView);

//TODO: refactor defaults as actually part of the initial store state!
