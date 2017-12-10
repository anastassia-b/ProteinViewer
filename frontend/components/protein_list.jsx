import React from 'react';
import defaults from '../protein_list';
import SearchContainer from './search_container';

class ProteinList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const id = e.currentTarget.innerHTML;
    // to use es7, es8 syntax (Array.prototype.includes())
    // need to change presets to babel-env
    const exists = this.props.proteinIds.indexOf(id);

    if (exists === -1) {
      this.props.requestProtein(id);
    } else {
      console.log("Already in state!");
      const protein = this.props.proteins[id];
      this.props.receiveProtein(protein);
    }
  }

  render() {
    const proteinList = defaults.map (protein => (
      <li key={protein} className="protein-list" onClick={this.handleClick.bind(this)}>{protein}</li>
    ));

    return (
      <nav>
        <SearchContainer />
        <ul>
          { proteinList }
        </ul>
      </nav>
    );
  }
}


export default ProteinList;
