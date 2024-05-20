import React from 'react';
import { Footer } from '../components/Footer';
import { FirgureSelecter } from '../components/FigureSelecter';
import { Header } from '../components/Header';



function Index() {

  return (
  <React.Fragment>
    <div className='min-h-screen min-w-screen flex items-center flex-col justify-between'>
      <Header className="" />
      <FirgureSelecter />
      <Footer className="" />

    </div>
   
  </ React.Fragment>
  
  );
}

export { Index };
