import React from 'react';
import defaults from '../protein_list';

const Main = () => {
  const proteinList = defaults.map (protein => (
    <li key={protein} className="protein-list">{protein}</li>
  ));

  return (
    <nav>
      <ul>
        { proteinList }
      </ul>
    </nav>
  );
};


export default Main;
