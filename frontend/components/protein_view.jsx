import React from 'react';

class ProteinView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const protein = this.props.protein;

    return (
      <main>
        { protein }
      </main>
    );
  }
}


export default ProteinView;
