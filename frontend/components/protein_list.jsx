import React from 'react';
import defaults from '../protein_list';

class ProteinList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.currentTarget.innerHTML;
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
      <li key={protein} className="protein-list" onClick={this.handleClick}>{protein}</li>
    ));

    return (
      <nav>
        <div className="search">
          <input placeholder="Search"></input>
        </div>
        <ul>
          { proteinList }
        </ul>
      </nav>
    );
  }
}


export default ProteinList;
