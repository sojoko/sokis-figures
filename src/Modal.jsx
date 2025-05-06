import React from 'react';
import { useState } from 'react';
import ResultModal from './ResultModal';

const Modal = ({ show, onClose, figure,
  setVolumenEsfera,
  setVolumenCubo,
  setVolumenParalelepipedo,
  setVolumenCilindro,
  setVolumenCono,
  addVolumen 
 }) => {
  const [radio, setRadio] = useState(0);
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(0);
  const [h, seth] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultVolumen, setResultVolumen] = useState(0);

  if (!show) {
    return null;
  }
  
  const calcVolumen = () => {
    let volumen = 0;
    if (figure.name === 'Esfera') {
      volumen = (4 / 3 * Math.PI * Math.pow(radio, 3)).toFixed(2);
    } else if (figure.name === 'Cubo') {
      volumen = (Math.pow(a, 3)).toFixed(2);
    } else if (figure.name === 'Paralelepipedo') {
      volumen = (a * b * c).toFixed(2);
    } else if (figure.name === 'Cilindro') {
      volumen = (Math.PI * Math.pow(radio, 2) * h).toFixed(2);
    } else if (figure.name === 'Cono') {
      volumen = (Math.PI * Math.pow(radio, 2) * h / 3).toFixed(2);
    }

    addVolumen(figure.name, parseFloat(volumen));
    setResultVolumen(volumen);
    setShowResultModal(true);
  };

  function handleClick(){
    calcVolumen();
  }
  
  const handleCloseResultModal = () => {
    setShowResultModal(false);
    onClose();
  };
  
  return (
    <div data-testid="solid-modal-container" className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div data-testid="solid-modal-content" className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg max-w-md w-full transition-colors duration-200">
        <h2 data-testid="solid-modal-title" className="text-2xl mb-4 text-gray-800 dark:text-gray-200">{figure.name}</h2>
        <form>
          {figure.name === 'Esfera' && (
            <div data-testid="solid-modal-esfera-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Radio:</label>
              <input 
                data-testid="solid-modal-radio-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"              
                onChange={(e) => {               
                  setRadio(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Cubo' && (
            <div data-testid="solid-modal-cubo-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">a</label>
              <input 
                data-testid="solid-modal-a-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {               
                  seta(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Paralelepipedo' && (
            <div data-testid="solid-modal-paralelepipedo-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">a</label>
              <input 
                data-testid="solid-modal-a-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  seta(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">b</label>
              <input 
                data-testid="solid-modal-b-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  setb(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">c</label>
              <input 
                data-testid="solid-modal-c-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                onChange={(e) => {
                  setc(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Cilindro' && (
            <div data-testid="solid-modal-cilindro-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Radio:</label>
              <input 
                data-testid="solid-modal-radio-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">h:</label>
              <input 
                data-testid="solid-modal-h-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  seth(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Cono' && (
            <div data-testid="solid-modal-cono-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Radio:</label>
              <input 
                data-testid="solid-modal-radio-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">h:</label>
              <input 
                data-testid="solid-modal-h-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                onChange={(e) => {
                  seth(e.target.value);
                }}
              />
            </div>
          )}
          <div className='flex justify-between'>
            <button 
              data-testid="solid-modal-close-button"
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 bg-pink-400 dark:bg-pink-600 text-white rounded hover:bg-pink-500 dark:hover:bg-pink-700 transition-colors duration-200"
            >
              Cerrar
            </button>
            <button 
              data-testid="solid-modal-calculate-button"
              type="button" 
              onClick={handleClick} 
              className="px-4 py-2 bg-pink-400 dark:bg-pink-600 text-white rounded hover:bg-pink-500 dark:hover:bg-pink-700 transition-colors duration-200"
            >
              Calcular figura individual
            </button>
          </div>
        </form>
      </div>
      <ResultModal 
        show={showResultModal} 
        onClose={handleCloseResultModal} 
        total={resultVolumen} 
        tipoFigura={`${figure ? figure.name.toLowerCase() : 'sólida'}`}
        esCalculoTotal={false}
        data-testid="result-modal-individual-solid"
      />
    </div>
  );
};

export default Modal;
