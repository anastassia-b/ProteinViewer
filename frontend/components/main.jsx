import React from 'react';
import ProteinListContainer from './protein_list_container';
import ProteinViewContainer from './protein_view_container';
import Footer from './footer';

const Main = () => {

  return (
    <div>
      <div className="nav-main">
        <ProteinListContainer />
        <ProteinViewContainer />
      </div>
      <Footer />
    </div>
  );
};


export default Main;
