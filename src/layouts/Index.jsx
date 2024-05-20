import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { FirgureContainer } from '../components/FigureContainer';
import { FirgureSelecter } from '../components/FigureSelecter';


function Index() {

  return (
  <React.Fragment>
    <div className='min-h-screen min-w-screen flex items-center flex-col justify-between'>
      <FirgureSelecter />
      <Footer className="" />

    </div>
   
  </ React.Fragment>
  
  );
}

export { Index };
