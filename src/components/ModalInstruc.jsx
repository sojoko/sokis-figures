import React from 'react';
import { useTheme } from '../ThemeContext';

function ModalInstruc({ isOpen, onClose }) {
  const { darkMode } = useTheme();
  
  if (!isOpen) return null;

  return (
    <div data-testid="modal-instruc-container" className="fixed inset-0 flex items-center justify-center z-50">
      <div data-testid="modal-instruc-backdrop" className="fixed inset-0 bg-black opacity-70"></div>
      <div data-testid="modal-instruc-content" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10 max-w-md w-full transition-colors duration-200">
        <h2 data-testid="modal-instruc-title" className="text-2xl font-bold mb-4 text-pink-500 dark:text-pink-400">Instrucciones</h2>
        <ol data-testid="modal-instruc-steps" className="list-decimal pl-5 space-y-2 dark:text-gray-200">
          <li data-testid="modal-instruc-step-1" className=''> <span className='text-cyan-600 dark:text-cyan-400 font-bold'>Selecciona un tipo de figura (planas o solidas)</span>
            <ul className="list-disc pl-5">
              <li data-testid="modal-instruc-step-1-detail">Cada figura te permitirá calcular su área o volumen según sea el caso.</li>
            </ul>
          </li>
          <li data-testid="modal-instruc-step-2" className=''> <span className='text-cyan-600 dark:text-cyan-400 font-bold'>Calcula el área o el volumen de una figura</span>
            <ul className="list-disc pl-5">
              <li data-testid="modal-instruc-step-2-detail">Puedes hacer clic en una figura y luego introducir los valores según la fórmula dada. Al darle a guardar, se calculará el área o el volumen de la figura seleccionada.</li>
            </ul>
          </li>
          <li data-testid="modal-instruc-step-3" className=''> <span className='text-cyan-600 dark:text-cyan-400 font-bold'>Calcula una figura irregular</span>
            <ul className="list-disc pl-5">
              <li data-testid="modal-instruc-step-3-detail">Una vez hayas terminado de calcular las figuras individuales, puedes hacer clic en "calcular figura irregular" para obtener la totalidad de todas las áreas/volúmenes.</li>
            </ul>
          </li>
          <li data-testid="modal-instruc-step-4" className=''> <span className='text-cyan-600 dark:text-cyan-400 font-bold'>¡Haz más cálculos!</span>
            <ul className="list-disc pl-5">
              <li data-testid="modal-instruc-step-4-detail">Calcular la figura irregular reinicia los valores y te permite continuar calculando otras figuras irregulares.</li>
            </ul>
          </li>
        </ol>
        <button
          data-testid="modal-instruc-accept-button"
          className="mt-6 bg-pink-500 hover:bg-pink-400 dark:bg-pink-600 dark:hover:bg-pink-700 text-white px-4 py-2 rounded transition-colors duration-200"
          onClick={onClose}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default ModalInstruc;
