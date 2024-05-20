import React from 'react';
import { Footer } from '../components/Footer';
import { FirgureContainer } from '../components/FigureContainer';
import { Header } from '../components/Header';



function FiguresSolid() {

  return (
  <React.Fragment>
    <div className='min-h-screen min-w-screen flex items-center flex-col justify-between'>
      <Header/>
      <FirgureContainer />
      <Footer className="" />

    </div>
   
  </ React.Fragment>
  
  );
}

export { FiguresSolid };
