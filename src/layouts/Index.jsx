import React from 'react';
import { Footer } from '../components/Footer';
import { FirgureSelecter } from '../components/FigureSelecter';
import { Header } from '../components/Header';
import { useTheme } from '../ThemeContext';

function Index() {
  const { darkMode } = useTheme();

  return (
  <React.Fragment>
    <div className='min-h-screen min-w-screen flex items-center flex-col justify-between bg-white dark:bg-gray-900 transition-colors duration-200'>
      <Header className="" />
      <FirgureSelecter />
      <Footer className="" />
    </div>
  </ React.Fragment>
  );
}

export { Index };
