import React from 'react';
import { Footer } from '../components/Footer';
import { FirgureContainerFlats } from '../components/FigureContainerFlats';
import { Header } from '../components/Header';



function FiguresFlats() {

  return (
  <React.Fragment>
    <div className='min-h-screen min-w-screen flex items-center flex-col justify-between'>
      <Header className="" />
      <FirgureContainerFlats />
      <Footer className="" />

    </div>
   
  </ React.Fragment>
  
  );
}

export { FiguresFlats };
