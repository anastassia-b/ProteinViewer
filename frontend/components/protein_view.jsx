import React from 'react';

class ProteinView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const protein = this.props.protein;

    if (protein === undefined) {
      return (
        <main>
          <div className="protein-view">
            <p>fetching protein information...</p>
            <textarea className="sequence" placeholder="fetching sequence..." />
          </div>
        </main>
      );
    } else {

      return (
        <main>
          <div className="protein-view">
            <h4>{ protein.name }</h4>
            <p>Accession: { protein.accession }</p>
            <p>Id: { protein.id }</p>
            <p>Length: { protein.length }</p>
            <p>Mass: { protein.mass }</p>
            <p>Sequence:</p>
            <textarea className="sequence" value={ protein.sequence } readOnly/>
          </div>
        </main>
      );
    }
  }
}


export default ProteinView;
