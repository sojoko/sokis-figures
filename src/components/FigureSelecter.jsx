import React from 'react';
import esferaImg from '../assets/esfera.png';
import trianguloImg from '../assets/triangulo.png';

function FirgureSelecter() {
  const figures = [
    { name: 'Figuras planas', img: trianguloImg, src:"/planas"},
    { name: 'Figuras solidas', img: esferaImg, src:"/solidas" },
  ];
  
  return (
    <div data-testid="figure-selecter-container" className='min-h-[85vh] flex justify-center items-center dark:bg-gray-900 transition-colors duration-200'>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-24 p-4 lg:mx-40 lg:mt-18 mt-1">
      {figures.map((figure, index) => (
        <a href={figure.src} data-testid={`figure-type-link-${figure.name}`} key={index}>
        <div data-testid={`figure-type-item-${figure.name}`} className="flex items-center justify-center lg:mt-14">
          <div className="mx-auto px-15">
            <div
              data-testid={`figure-type-card-${figure.name}`}
              className="max-w-xs cursor-pointer rounded-lg bg-white dark:bg-gray-800 p-8 shadow duration-150 hover:scale-105 hover:shadow-md transition-colors"
            >
              <img
                data-testid={`figure-type-image-${figure.name}`}
                className="w-full rounded-lg object-cover object-center"
                src={figure.img}
                alt={figure.name}
              />
              <p data-testid={`figure-type-name-${figure.name}`} className="my-2 ffont-bold text-gray-900 dark:text-gray-100 text-2xl text-center">{figure.name}</p>
              <p data-testid={`figure-type-formula-${figure.name}`} className="mb-2 ml-4 text-xl font-semibold text-gray-800 dark:text-gray-200">{figure.formula}</p>
            </div>
          </div>
        </div>
        </a>
      ))}   
      <div className="flex justify-center items-center">
      </div>
    </div>
    </div>
  );
}

export { FirgureSelecter };
