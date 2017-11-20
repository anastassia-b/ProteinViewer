import React from 'react';
import ProteinListContainer from './protein_list_container';
import ProteinViewContainer from './protein_view_container';

const Main = () => {

  return (
    <div className="nav-main">
      <ProteinListContainer />
      <ProteinViewContainer />
    </div>
  );
};


export default Main;
