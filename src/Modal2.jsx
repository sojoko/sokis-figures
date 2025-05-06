import React from 'react';
import { useState } from 'react';
import ResultModal from './ResultModal';

const Modal2 = ({ show, onClose, figure,
  addVolumen 
 }) => {
  const [radio, setRadio] = useState(0);
  const [l, setl] = useState(0);
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [d, setd] = useState(0);
  const [h, seth] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultArea, setResultArea] = useState(0);

  if (!show) {
    return null;
  }
  
  const calcArea = () => {
    let area = 0;
    if (figure.name === 'Cuadrado') {
      area = (l*4).toFixed(2);
    } else if (figure.name === 'Rectangulo') {
      area = (b * h).toFixed(2);
    } else if (figure.name === 'Triangulo') {
      area = ((b * h) / 2).toFixed(2);
    } else if (figure.name === 'Rombo') {
      area = ((a * d) / 2).toFixed(2);
    } else if (figure.name === 'Romboide') {
      area = (b * a).toFixed(2);      
    } else if (figure.name === 'Trapecio') {
      area = (h*(a+b)/2).toFixed(2);
    } else if (figure.name === 'Circulo') {
      area = (Math.PI * Math.pow(radio, 2)).toFixed(2);
    }

    addVolumen(figure.name, parseFloat(area));
    setResultArea(area);
    setShowResultModal(true);
  };

  function handleClick(){
    calcArea();
  }
  
  const handleCloseResultModal = () => {
    setShowResultModal(false);
    onClose();
  };
  
  return (
    <div data-testid="flat-modal-container" className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div data-testid="flat-modal-content" className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg max-w-md w-full transition-colors duration-200">
        <h2 data-testid="flat-modal-title" className="text-2xl mb-4 text-gray-800 dark:text-gray-200">{figure.name}</h2>
        <form>
          {figure.name === 'Cuadrado' && (
            <div data-testid="flat-modal-cuadrado-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Lado:</label>
              <input 
                data-testid="flat-modal-lado-input" 
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"              
                onChange={(e) => {               
                  setl(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Rectangulo' && (
            <div data-testid="flat-modal-rectangulo-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">b:</label>
              <input 
                data-testid="flat-modal-b-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {               
                  setb(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">h:</label>
              <input 
                data-testid="flat-modal-h-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {               
                  seth(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Triangulo' && (
            <div data-testid="flat-modal-triangulo-input" className="mb-4">             
              <label className="block text-gray-700 dark:text-gray-300">b:</label>
              <input 
                data-testid="flat-modal-b-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  setb(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">h:</label>
              <input 
                data-testid="flat-modal-h-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                onChange={(e) => {
                  seth(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Rombo' && (
            <div data-testid="flat-modal-rombo-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">a:</label>
              <input 
                data-testid="flat-modal-a-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  seta(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">d:</label>
              <input 
                data-testid="flat-modal-d-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  setd(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Romboide' && (
            <div data-testid="flat-modal-romboide-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">b:</label>
              <input 
                data-testid="flat-modal-b-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  setb(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">a:</label>
              <input 
                data-testid="flat-modal-a-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                onChange={(e) => {
                  seta(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Trapecio' && (
            <div data-testid="flat-modal-trapecio-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">h:</label>
              <input 
                data-testid="flat-modal-h-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  seth(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">a:</label>
              <input 
                data-testid="flat-modal-a-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                onChange={(e) => {
                  seta(e.target.value);
                }}
              />
              <label className="block text-gray-700 dark:text-gray-300">b:</label>
              <input 
                data-testid="flat-modal-b-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                onChange={(e) => {
                  setb(e.target.value);
                }}
              />
            </div>
          )}
          {figure.name === 'Circulo' && (
            <div data-testid="flat-modal-circulo-input" className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">radio:</label>
              <input 
                data-testid="flat-modal-radio-input"
                type="number" 
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
              />
            </div>
          )}
          <div className='flex justify-between'>
            <button 
              data-testid="flat-modal-close-button"
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 bg-pink-400 dark:bg-pink-600 text-white rounded hover:bg-pink-500 dark:hover:bg-pink-700 transition-colors duration-200"
            >
              Cerrar
            </button>
            <button 
              data-testid="flat-modal-calculate-button"
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
        total={resultArea} 
        tipoFigura={`${figure ? figure.name.toLowerCase() : 'plana'}`}
        esCalculoTotal={false}
        data-testid="result-modal-individual-flat"
      />
    </div>
  );
};

export default Modal2;
