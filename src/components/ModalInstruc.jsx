import React from 'react';

function ModalInstruc({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-pink-500">Instrucciones</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li className=''> <span className='text-cyan-600 font-bold'>Selecciona un tipo de figuras</span>
            <ul className="list-disc pl-5">
              <li>Cada figura te permitirá calcular su área o volumen según sea el caso.</li>
            </ul>
          </li>
          <li className=''> <span className='text-cyan-600 font-bold'>Calcula el área o el volumen de una figura</span>
            <ul className="list-disc pl-5">
              <li>Puedes hacer clic en una figura y luego introducir los valores según la fórmula dada. Al darle a guardar, se calculará el área o el volumen de la figura seleccionada.</li>
            </ul>
          </li>
          <li className=''> <span className='text-cyan-600 font-bold'>Calcular figura irregular</span>
            <ul className="list-disc pl-5">
              <li>Una vez hayas terminado de calcular las figuras individuales, puedes hacer clic en "calcular figura irregular" para obtener la totalidad de todas las áreas/volúmenes.</li>
            </ul>
          </li>
          <li className=''> <span className='text-cyan-600 font-bold'>¡Haz más cálculos!</span>
            <ul className="list-disc pl-5">
              <li>Calcular la figura irregular reinicia los valores y te permite continuar calculando otras figuras irregulares.</li>
            </ul>
          </li>
        </ol>
        <button
          className="mt-6 bg-pink-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default ModalInstruc;
