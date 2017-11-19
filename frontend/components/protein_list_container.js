import { connect } from 'react-redux';
import ProteinList from './protein_list';
import { requestProtein } from '../actions/protein_actions';

const mapDispatchToProps = dispatch => ({
  requestProtein: (id) => dispatch(requestProtein(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ProteinList);
