import { connect } from 'react-redux';
import ProteinView from './protein_view';
import { requestProtein } from '../actions/protein_actions';
import { selectProtein } from '../reducers/selectors';

const mapStateToProps = state => ({
  protein: selectProtein(state)
});

const mapDispatchToProps = dispatch => ({
  requestProtein: (id) => dispatch(requestProtein(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProteinView);

//TODO: refactor defaults as actually part of the initial store state!
