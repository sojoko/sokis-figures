import React from 'react';
import { useTheme } from './ThemeContext';

function ResultModal({ show, onClose, total, tipoFigura, esCalculoTotal = false }) {
  const { darkMode } = useTheme();
  
  if (!show) return null;
  
  return (
    <div 
      data-testid="result-modal-container" 
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div 
        data-testid="result-modal-backdrop" 
        className="fixed inset-0 bg-black opacity-70"
      ></div>
      
      <div 
        data-testid="result-modal-content" 
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10 max-w-md w-full transition-colors duration-200"
      >
        <h2 
          data-testid="result-modal-title" 
          className="text-2xl font-bold mb-4 text-pink-500 dark:text-pink-400"
        >
          Resultado del cálculo
        </h2>
        
        <div 
          data-testid="result-modal-result" 
          className="bg-cyan-50 dark:bg-cyan-900 p-4 rounded-lg mb-6 transition-colors duration-200"
        >
          <p className="text-gray-800 dark:text-gray-200 text-lg">
            {esCalculoTotal 
              ? `El valor de la figura ${tipoFigura} irregular es:` 
              : `El ${tipoFigura.includes('volumen') ? 'volumen' : 'área'} de la figura ${tipoFigura} es:`}
          </p>
          <p 
            data-testid="result-modal-value" 
            className="text-3xl text-center font-bold text-cyan-600 dark:text-cyan-400 my-4"
          >
            {total}
          </p>
          {esCalculoTotal && total > 0 && (
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Se han sumado todas las figuras calculadas.
            </p>
          )}
          {esCalculoTotal && total <= 0 && (
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              No se ha seleccionado ninguna figura o ya se calculó el total.
            </p>
          )}
        </div>
        
        <button
          data-testid="result-modal-close-button"
          className="w-full mt-6 bg-pink-500 hover:bg-pink-400 dark:bg-pink-600 dark:hover:bg-pink-700 text-white px-4 py-3 rounded text-lg font-medium transition-colors duration-200"
          onClick={onClose}
        >
          Calcular más figuras
        </button>
      </div>
    </div>
  );
}

export default ResultModal;