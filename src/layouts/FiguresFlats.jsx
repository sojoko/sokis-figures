import React from 'react';
import { Footer } from '../components/Footer';
import { FirgureContainerFlats } from '../components/FigureContainerFlats';
import { Header } from '../components/Header';
import { useTheme } from '../ThemeContext';

function FiguresFlats() {
  const { darkMode } = useTheme();

  return (
  <React.Fragment>
    <div className='min-h-screen min-w-screen flex items-center flex-col justify-between bg-white dark:bg-gray-900 transition-colors duration-200' data-testid="figures-flats-container">
      <Header className="" />
      <FirgureContainerFlats />
      <Footer className="" />
    </div>
  </ React.Fragment>
  );
}

export { FiguresFlats };
