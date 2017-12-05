import React from 'react';

class ProteinView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const protein = this.props.protein;
    const loading = this.props.loading;

    if (loading) {
      return (
        <main>
          <p>Loading...</p>
        </main>
      )
    }

    if (protein === undefined) {
      return (
        <main>
          <div className="protein-view">
            <p>Select a protein!</p>
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
