import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { FirgureContainer } from '../components/FigureContainer';



function FiguresSolid() {

  return (
  <React.Fragment>
    <div className='min-h-screen min-w-screen flex items-center flex-col justify-between'>
      <FirgureContainer />
      <Footer className="" />

    </div>
   
  </ React.Fragment>
  
  );
}

export { FiguresSolid };
