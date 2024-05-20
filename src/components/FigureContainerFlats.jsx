import React, { useState } from 'react';
import cuadradoImg from '../assets/cuadrado.png';
import rectanguloImg from '../assets/rectangulo.png';
import trianguloImg from '../assets/triangulo.png';
import romboImg from '../assets/rombo.png';
import romboideImg from '../assets/romboide.png';
import trapecioImg from '../assets/trapecio.png';
import circuloImg from '../assets/circulo.png';
import Modal2 from '../Modal2';

function FirgureContainerFlats() {
  const figures = [
    { name: 'Cuadrado', area: 'Área = 4*l', perimetro: 'perimetro = 4 * l', img: cuadradoImg },
    { name: 'Rectangulo', area: 'Área = b * h', perimetro: 'perimetro = 2*b+2*h', img: rectanguloImg },
    { name: 'Triangulo', area: 'Área = (b * h)/2', perimetro: 'perimetro = n/a',  img: trianguloImg },
    { name: 'Rombo', area: 'Área = (a*d)/2', perimetro: 'perimetro = n/a', img: romboImg },
    { name: 'Romboide', area: 'Área = b * a', perimetro: 'perimetro = 2 * (b + a)', img: romboideImg },
    { name: 'Trapecio', area: 'Área = h*(a+b)/2', perimetro: 'perimetro = n/a',  img: trapecioImg },
    { name: 'Circulo', area: 'Área = Pi*r^2', perimetro: 'perimetro = 2*pi*r', img: circuloImg },
  
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedFigure, setSelectedFigure] = useState(null);
  const [areaCuadrados, setAreaCuadrados] = useState([]);
  const [areaRectangulos, setAreaRectangulos] = useState([]);
  const [areaTriangulos, setAreaTriangulos] = useState([]);
  const [areaRombos, setAreaRombos] = useState([]);
  const [areaRomboides, setAreaRomboides] = useState([]);
  const [areaTrapecios, setAreaTrapecios] = useState([]);
  const [areaCirculos, setAreaCirculos] = useState([]);


  
  const addVolumen = (figureName, area) => {
    if (figureName === 'Cuadrado') {
      setAreaCuadrados(prevAreaCuadrados => [...prevAreaCuadrados, area]);
    } else if (figureName === 'Rectangulo') {
      setAreaRectangulos(prevAreaRectangulos => [...prevAreaRectangulos, area]);
    } else if (figureName === 'Triangulo') {
      setAreaTriangulos(prevAreaTriangulos => [...prevAreaTriangulos, area]);
    } else if (figureName === 'Rombo') {
      setAreaRombos(prevAreaRombos => [...prevAreaRombos, area]);
    } else if (figureName === 'Romboide') {
      setAreaRomboides(prevAreaRomboides => [...prevAreaRomboides, area]);
    } else if (figureName === 'Trapecio') {
      setAreaTrapecios(prevAreaTrapecios => [...prevAreaTrapecios, area]);
    } else if (figureName === 'Circulo') {
      setAreaCirculos(prevAreaCirculos => [...prevAreaCirculos, area]);
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
    const sumarAreas = (areas) => {
      return areas.reduce((acc, curr) => acc + curr, 0);
    };
    let total = sumarAreas(areaCuadrados) +
    sumarAreas(areaRectangulos) +
    sumarAreas(areaRombos) +
    sumarAreas(areaRomboides) +
    sumarAreas(areaTriangulos) +
    sumarAreas(areaTrapecios) +
    sumarAreas(areaCirculos);

   
    
    total = total.toFixed(2);
    setAreaCuadrados([]);
    setAreaRectangulos([]);
    setAreaRomboides([]);
    setAreaRombos([]);
    setAreaTrapecios([]);
    setAreaTriangulos([]);
    setAreaCirculos([]);
   
    if (total > 0){
      alert('el valor de la figura irregular es: ' + total);
    }
    else{
      alert('No se ha seleccionado ninguna figura o ya se calculo el total');
    }
   
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2  lg:gap-10 p-4 lg:mx-40 mt-2">
      {figures.map((figure, index) => (
        <div key={index} className="flex items-center justify-center mb-2 lg:mb-0">
          <div className="mx-auto px-15">
            <div
              className="max-w-xs cursor-pointer rounded-lg bg-white p-6 shadow duration-150 hover:scale-105 hover:shadow-md"
              onClick={() => handleOpenModal(figure)}
            >
              <img
                className="w-full h-60 rounded-lg object-cover object-center"
                src={figure.img}
                alt={figure.name}
              />
              <p className="my-2 pl-4 font-bold text-gray-500 text-xl">{figure.name}</p>
              <p className=" ml-4 text-xl font-semibold text-gray-800">{figure.area}</p>
              <p className="mb-1 ml-4 text-lg font-semibold text-gray-800">{figure.perimetro}</p>
            </div>
          </div>
        </div>
      ))}
      <Modal2 show={showModal} onClose={handleCloseModal} figure={selectedFigure}
      
        addVolumen={addVolumen}
        
      />
      <div className="flex justify-center  items-center">
        <button onClick={calcTotal} className="bg-pink-500 mt-4 mb-4 text-white text-xl sm:text-2xl lg:text-4xl rounded-md w-64 h-16 hover:bg-pink-400 lg:h-80 lg:w-80">
          Calcular figura plana irregular
        </button>
      </div>
 
    </div>
  
  );
}

export { FirgureContainerFlats };
