import React from 'react';
import { useState } from 'react';


const Modal2 = ({ show, onClose, figure,
  addVolumen 
 }) => {
  const [radio, setRadio] = useState(0);
  const [l, setl] = useState(0);
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [d, setd] = useState(0);
  const [h, seth] = useState(0);



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
    alert(`El area de la ${figure.name.toLowerCase()} es: ${area}`);
  };



  function handleClick(){
    calcArea();
    onClose();
  }
  
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4">{figure.name}</h2>
        <form>
          {figure.name === 'Cuadrado' && (
            <div className="mb-4">
              <label className="block text-gray-700">Lado:</label>
              <input type="number" className="w-full p-2 border rounded"              
              onChange={(e) => {               
                setl(e.target.value);
                }}
              />
            </div>

          )
          }
           {figure.name === 'Rectangulo' && (
            <div className="mb-4">
              <label className="block text-gray-700">b:</label>
              <input type="number" className="w-full p-2 border rounded" 
                onChange={(e) => {               
                  seta(e.target.value);
                  }}
               
              />
               <label className="block text-gray-700">h:</label>
              <input type="number" className="w-full p-2 border rounded" 
                onChange={(e) => {               
                  seth(e.target.value);
                  }}
               
              />
            </div>

          )
          }
          {figure.name === 'Triangulo' && (
            <div className="mb-4">             
              <label className="block text-gray-700">b:</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                setb(e.target.value);
                }}
              />
              <label className="block text-gray-700">h:</label>
              <input type="number" className="w-full p-2 border rounded"
              onChange={(e) => {
                seth(e.target.value);
                }
              }
              />
            </div>
          )
          }
          {figure.name === 'Rombo' && (
            <div className="mb-4">
              <label className="block text-gray-700">a:</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                seta(e.target.value);
                }
              }
          
              />
              <label className="block text-gray-700">d:</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                setd(e.target.value);
                }
              }
              />
            </div>
          )
          }
          {figure.name === 'Romboide' && (
            <div className="mb-4">
              <label className="block text-gray-700">b:</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                setb(e.target.value);
                }
              }
              />
              <label className="block text-gray-700">a:</label>
              <input type="number" className="w-full p-2 border rounded"
              onChange={(e) => {
                seta(e.target.value);
                }
              }
              />
        
            </div>
          )
          }
            {figure.name === 'Trapecio' && (
            <div className="mb-4">
              <label className="block text-gray-700">h:</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                seth(e.target.value);
                }
              }
              />
              <label className="block text-gray-700">a:</label>
              <input type="number" className="w-full p-2 border rounded"
              onChange={(e) => {
                seta(e.target.value);
                }
              }
              />
              <label className="block text-gray-700">b:</label>
              <input type="number" className="w-full p-2 border rounded"
              onChange={(e) => {
                setb(e.target.value);
                }
              }
              />
        
            </div>
          )
          }
              {figure.name === 'Circulo' && (
            <div className="mb-4">
              <label className="block text-gray-700">radio:</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                setRadio(e.target.value);
                }
              }
              />
            
        
            </div>
          )
          }
          <div className='flex justify-between'>
            <button type="button" onClick={onClose} className="px-4 py-2 bg-pink-400 text-white rounded">
              Cerrar
            </button>
            <button type="button" onClick={handleClick} className="px-4 py-2 bg-pink-400 text-white rounded">
            Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal2;
