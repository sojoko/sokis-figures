import React, { useState } from 'react';
import esferaImg from '../assets/esfera.png';
import cuboImg from '../assets/cubo.png';
import paralelepipedoImg from '../assets/paralelepipedo.png';
import cilindroImg from '../assets/cilindro.png';
import conoImg from '../assets/cono.png';
import Modal from '../Modal';

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
  const [volumenCubos, setVolumenCubos] = useState([]);
  const [volumenParalelepipedos, setVolumenParalelepipedos] = useState([]);
  const [volumenCilindros, setVolumenCilindros] = useState([]);
  const [volumenConos, setVolumenConos] = useState([]);
  const [volumenEsferas, setVolumenEsferas] = useState([]);

  
  const addVolumen = (figureName, volumen) => {
    if (figureName === 'Esfera') {
      setVolumenEsferas(prevVolumenEsferas => [...prevVolumenEsferas, volumen]);
    } else if (figureName === 'Cubo') {
      setVolumenCubos(prevVolumenCubos => [...prevVolumenCubos, volumen]);
    } else if (figureName === 'Paralelepipedo') {
      setVolumenParalelepipedos(prevVolumenParalelepipedos => [...prevVolumenParalelepipedos, volumen]);
    } else if (figureName === 'Cilindro') {
      setVolumenCilindros(prevVolumenCilindros => [...prevVolumenCilindros, volumen]);
    } else if (figureName === 'Cono') {
      setVolumenConos(prevVolumenConos => [...prevVolumenConos, volumen]);
    }
  };
  const handleOpenModal = (figure) => {
    setSelectedFigure(figure);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFigure(null);
  };

  function calcTotal(){
    const sumarVolumenes = (volumenes) => {
      return volumenes.reduce((acc, curr) => acc + curr, 0);
    };
    let total = sumarVolumenes(volumenEsferas) +
    sumarVolumenes(volumenCubos) +
    sumarVolumenes(volumenParalelepipedos) +
    sumarVolumenes(volumenCilindros) +
    sumarVolumenes(volumenConos);
    
    total = total.toFixed(2);
    setVolumenEsferas([]);
    setVolumenCubos([]);
    setVolumenParalelepipedos([]);
    setVolumenCilindros([]);
    setVolumenConos([]);
    if (total > 0){
      alert('el valor de la figura irregular es: ' + total);
    }
    else{
      alert('No se ha seleccionado ninguna figura o ya se calculo el total');
    }
   
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-8 p-2 lg:mx-34 mt-1">
      {figures.map((figure, index) => (
        <div key={index} className="flex items-center justify-center mb-2 lg:mb-0 lg:mr-8">
          <div className="mx-auto px-15">
            <div
              className="max-w-xs cursor-pointer rounded-lg bg-white p-8 shadow duration-150 hover:scale-105 hover:shadow-md"
              onClick={() => handleOpenModal(figure)}
            >
              <img
                className="w-full rounded-lg object-cover object-center"
                src={figure.img}
                alt={figure.name}
              />
              <p className="my-1 pl-4 font-bold text-gray-500 text-xl">{figure.name}</p>
              <p className="mb-1 ml-4 text-xl font-semibold text-gray-800">{figure.formula}</p>
            </div>
          </div>
        </div>
      ))}
      <Modal show={showModal} onClose={handleCloseModal} figure={selectedFigure}
      
        addVolumen={addVolumen}
        
      />
      <div className="flex justify-center  items-center">
        <button onClick={calcTotal} className="bg-pink-500 mt-4 mb-4 text-white text-xl sm:text-2xl lg:text-4xl rounded-md w-64 h-16 hover:bg-pink-400 lg:h-80 lg:w-80">
          Calcular figura solida irregular
        </button>
      </div>
 
    </div>
  
  );
}

export { FirgureContainer };
