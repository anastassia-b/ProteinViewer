import React from 'react';

class ProteinView extends React.Component {
  constructor(props) {
    super(props);
  }

  formatSequence(seq) {
    let newSeq = "<div>";

    for (let i=0; i <=seq.length; i = i + 20) {
      newSeq += seq.slice(i, i+20);
      newSeq += '<br/>';
    }

    newSeq += '</div>';
    return newSeq;
  }

  render() {
    const protein = this.props.protein;

    if (protein === undefined || protein.length === 0) {
      return (
        <main>
          <div className="protein-view">
            fetching protein information...
          </div>
        </main>
      );
    } else {
      // definitely need to refactor/rethink this.
      // bad way of doing this because diff api calls have dif keys.
      const accession = protein[0];
      const id = protein[1];
      const sequence = protein[13];
      const newSeq = this.formatSequence(sequence.sequence);
      console.log($.parseHTML(newSeq).innerText);
      // $('.protein-view').append($.parseHTML(newSeq));

      return (
        <main>
          <div className="protein-view">
            accession: { accession } <br/>
            id: { id } <br/>
            length: { sequence.length } <br/>
            mass: { sequence.mass } <br/>
            sequence: <br/>
          </div>
        </main>
      );
    }
  }
}


export default ProteinView;
