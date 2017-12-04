import React from 'react';

class ProteinView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const protein = this.props.protein;

    if (protein === undefined || protein.length === 0) {
      return (
        <main>
          <div className="protein-view">
            <p>fetching protein information...</p>
            <textarea className="sequence">
              Protein Sequence
            </textarea>
          </div>
        </main>
      );
    } else {
      // definitely need to refactor/rethink this.
      // bad way of doing this because diff api calls have dif keys.
      const accession = protein[0];
      const id = protein[1];
      const sequence = protein[13];
      debugger;
      const newSeq = sequence.sequence;

      return (
        <main>
          <div className="protein-view">
            <p>accession: { accession }</p>
            <p>id: { id }</p>
            <p>length: { sequence.length }</p>
            <p>mass: { sequence.mass }</p>
            <p>sequence: </p>
            <textarea className="sequence">
              { newSeq }
            </textarea>
          </div>
        </main>
      );
    }
  }
}


export default ProteinView;
