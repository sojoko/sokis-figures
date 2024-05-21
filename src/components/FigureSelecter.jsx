import React from 'react';
import esferaImg from '../assets/esfera.png';
import trianguloImg from '../assets/triangulo.png';

function FirgureSelecter() {
  const figures = [
    { name: 'Figuras planas', img: trianguloImg, src:"/planas"},
    { name: 'Figuras solidas', img: esferaImg, src:"/solidas" },
   
  ];
  return (
    <div className='min-h-[85vh] flex justify-center items-center'>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-24 p-4 lg:mx-40 lg:mt-18 mt-1">
      {figures.map((figure, index) => (
        <a href={figure.src}>
        <div key={index} className="flex items-center justify-center lg:mt-14">
          <div className="mx-auto px-15">
            <div
              className="max-w-xs cursor-pointer rounded-lg bg-white p-8 shadow duration-150 hover:scale-105 hover:shadow-md"
             
            >
              <img
                className="w-full rounded-lg object-cover object-center"
                src={figure.img}
                alt={figure.name}
              />
              <p className="my-2  ffont-bold text-gray-900 text-2xl text-center">{figure.name}</p>
              <p className="mb-2 ml-4 text-xl font-semibold text-gray-800">{figure.formula}</p>
            </div>
          </div>
        </div>
        </a>
      ))}   
      <div className="flex justify-center  items-center">
      
      </div>
  
    </div>
    
    </div>
    
  
  );
}

export { FirgureSelecter };
