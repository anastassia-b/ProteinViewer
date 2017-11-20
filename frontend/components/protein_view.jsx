import React from 'react';

class ProteinView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const protein = this.props.protein;

    if (protein.length === 0) {
      return (
        <main>
          fetching protein information...
        </main>
      );
    }

    return (
      <main>
        <div>
          { protein[0]}
          <br/>
          { protein[1]}
        </div>
      </main>
    );
  }
}


export default ProteinView;
