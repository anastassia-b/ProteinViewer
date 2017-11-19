import React from 'react';
import defaults from '../protein_list';

const Main = () => {
  const proteinList = defaults.map (protein => (
    <li key={protein}>{protein}</li>
  ));

  return (
    <div>
      <h1>Protein Viewer</h1>
      <ul>
        { proteinList }
      </ul>
    </div>
  );
};


export default Main;
