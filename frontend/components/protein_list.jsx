import React from 'react';
import defaults from '../protein_list';

class ProteinList extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.currentTarget.innerHTML;
    this.props.requestProtein(id);
  }

  render() {
    const proteinList = defaults.map (protein => (
      <li key={protein} className="protein-list" onClick={this.handleClick}>{protein}</li>
    ));

    return (
      <nav>
        <ul>
          { proteinList }
        </ul>
      </nav>
    );
  }
}


export default ProteinList;
