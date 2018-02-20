import { connect } from 'react-redux';
import Search from './search';
import { selectProteins, selectProteinIds } from '../reducers/selectors';
import { requestProtein, receiveProtein } from '../actions/protein_actions';

const mapStateToProps = state => ({
  proteins: state.proteins,
  proteinIds: selectProteinIds(state)
});

const mapDispatchToProps = dispatch => ({
  requestProtein: (id) => dispatch(requestProtein(id)),
  receiveProtein: (protein) => dispatch(receiveProtein(protein))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
