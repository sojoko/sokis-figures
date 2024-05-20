
import React, { useState } from 'react';
import ModalInstruc from './ModalInstruc';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex w-full justify-between items-center flex-col lg:flex-row'>
      <a href="../">
        <p className='mt-6 lg:ml-16 text-center text-pink-500 text-3xl font-extrabold'>SOKIS FIGURES</p>
      </a>
      <button onClick={openModal}>
        <p className='mt-6 lg:mr-16 text-center text-pink-500 text-2xl font-extrabold'>INSTRUCCIONES</p>
      </button>
      <ModalInstruc isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export { Header };
