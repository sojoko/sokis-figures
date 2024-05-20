import React, { useState } from 'react';
import esferaImg from './assets/esfera.png';
import cuboImg from './assets/cubo.png';
import paralelepipedoImg from './assets/paralelepipedo.png';
import cilindroImg from './assets/cilindro.png';
import conoImg from './assets/cono.png';
import Modal from './Modal';

function FirgureContainer() {
  const figures = [
    { name: 'Esfera', formula: 'Volumen = 4*pi*r^2/3', img: esferaImg },
    { name: 'Cubo', formula: 'Volumen = a^3', img: cuboImg },
    { name: 'Paralelepipedo', formula: 'Volumen = a*b*c', img: paralelepipedoImg },
    { name: 'Cilindro', formula: 'Volumen = pi*r^2*h', img: cilindroImg },
    { name: 'Cono', formula: 'Volumen = pi*r^2*h', img: conoImg },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedFigure, setSelectedFigure] = useState(null);
  const [volumenEsfera, setVolumenEsfera] = useState(0);
  const [volumenCubo, setVolumenCubo] = useState(0);
  const [volumenParalelepipedo, setVolumenParalelepipedo] = useState(0);
  const [volumenCilindro, setVolumenCilindro] = useState(0);
  const [volumenCono, setVolumenCono] = useState(0);

  const handleOpenModal = (figure) => {
    setSelectedFigure(figure);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFigure(null);
  };

  function calcTotal(){
    let total = parseFloat(volumenEsfera) + parseFloat(volumenCubo) + parseFloat(volumenParalelepipedo) + parseFloat(volumenCilindro) + parseFloat(volumenCono);
    total = total.toFixed(2);
    setVolumenEsfera(0);
    setVolumenCubo(0);
    setVolumenParalelepipedo(0);
    setVolumenCilindro(0);
    setVolumenCono(0);
    if (total > 0){
      alert('el valor de la figura irregular es: ' + total);
    }
    else{
      alert('No se ha seleccionado ninguna figura o ya se calculo el total');
    }
   
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 lg:mx-40 mt-4">
      {figures.map((figure, index) => (
        <div key={index} className="flex items-center justify-center mb-4">
          <div className="mx-auto px-15">
            <div
              className="max-w-xs cursor-pointer rounded-lg bg-white p-6 shadow duration-150 hover:scale-105 hover:shadow-md"
              onClick={() => handleOpenModal(figure)}
            >
              <img
                className="w-full rounded-lg object-cover object-center"
                src={figure.img}
                alt={figure.name}
              />
              <p className="my-2 pl-4 font-bold text-gray-500 text-xl">{figure.name}</p>
              <p className="mb-2 ml-4 text-xl font-semibold text-gray-800">{figure.formula}</p>
            </div>
          </div>
        </div>
      ))}
      <Modal show={showModal} onClose={handleCloseModal} figure={selectedFigure}
        setVolumenEsfera={setVolumenEsfera}
        setVolumenCubo={setVolumenCubo}
        setVolumenParalelepipedo={setVolumenParalelepipedo}
        setVolumenCilindro={setVolumenCilindro}
        setVolumenCono={setVolumenCono}
      />
      <div className="flex justify-center  items-center">
        <button onClick={calcTotal} className="bg-pink-500 text-white text-2xl sm:text-2xl lg:text-4xl rounded-md w-64 h-16 hover:bg-pink-400 lg:h-80 lg:w-80">
          Calcular figura irregular
        </button>
      </div>
      <div>
      <p className=' text-center text-pink-500 text-lg font-bold'>Hecho por Jonhathan Sojo</p>
    </div>
    </div>
  
  );
}

export { FirgureContainer };
