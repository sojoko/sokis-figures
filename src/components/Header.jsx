import React, { useState } from 'react';
import ModalInstruc from './ModalInstruc';
import { useTheme } from '../ThemeContext';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex pb-3 w-full justify-between items-center flex-col lg:flex-row dark:bg-gray-800 transition-colors duration-200' data-testid="header">
      <a href="../" data-testid="header-link">
        <p className='mt-4 lg:ml-16 text-center text-pink-500 dark:text-pink-400 text-3xl font-extrabold'>SOKIS FIGURES</p>
      </a>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <button 
          onClick={toggleDarkMode} 
          className='bg-purple-500 hover:bg-purple-600 p-1 rounded-lg mt-2 transition-colors duration-200 dark:bg-purple-700 dark:hover:bg-purple-800'
          data-testid="theme-toggle-button"
        >
          <p className='mx-2 text-center text-white text-xl font-extrabold'>
            {darkMode ? 'MODO CLARO' : 'MODO OSCURO'}
          </p>
        </button>
        
        <button 
          onClick={openModal} 
          className='bg-cyan-400 lg:mr-16 p-1 rounded-lg hover:bg-cyan-500 mt-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 transition-colors duration-200' 
          data-testid="header-button"
        >
          <p className='mx-2 text-center text-white text-xl font-extrabold'>INSTRUCCIONES</p>
        </button>
      </div>
      
      <ModalInstruc isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export { Header };
