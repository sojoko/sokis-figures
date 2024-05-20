import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { FirgureContainerFlats } from '../components/FigureContainerFlats';



function FiguresFlats() {

  return (
  <React.Fragment>
    <div className='min-h-screen min-w-screen flex items-center flex-col justify-between'>
      <FirgureContainerFlats />
      <Footer className="" />

    </div>
   
  </ React.Fragment>
  
  );
}

export { FiguresFlats };
