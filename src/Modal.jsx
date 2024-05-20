import React from 'react';
import { useState } from 'react';


const Modal = ({ show, onClose, figure,
  setVolumenEsfera,
  setVolumenCubo,
  setVolumenParalelepipedo,
  setVolumenCilindro,
  setVolumenCono,
  addVolumen 
 }) => {
  const [radio, setRadio] = useState(0);
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(0);
  const [h, seth] = useState(0);



  if (!show) {
    return null;
  }
  const calcVolumen = () => {
    let volumen = 0;
    if (figure.name === 'Esfera') {
      volumen = (4 / 3 * Math.PI * Math.pow(radio, 3)).toFixed(2);
    } else if (figure.name === 'Cubo') {
      volumen = (Math.pow(a, 3)).toFixed(2);
    } else if (figure.name === 'Paralelepipedo') {
      volumen = (a * b * c).toFixed(2);
    } else if (figure.name === 'Cilindro') {
      volumen = (Math.PI * Math.pow(radio, 2) * h).toFixed(2);
    } else if (figure.name === 'Cono') {
      volumen = (Math.PI * Math.pow(radio, 2) * h / 3).toFixed(2);
    }

    addVolumen(figure.name, parseFloat(volumen));
    alert(`El volumen de la ${figure.name.toLowerCase()} es: ${volumen}`);
  };



  function handleClick(){
    calcVolumen();
    onClose();
  }
  
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4">{figure.name}</h2>
        <form>
          {figure.name === 'Esfera' && (
            <div className="mb-4">
              <label className="block text-gray-700">Radio:</label>
              <input type="number" className="w-full p-2 border rounded"              
              onChange={(e) => {               
                setRadio(e.target.value);
                }}
              />
            </div>

          )
          }
           {figure.name === 'Cubo' && (
            <div className="mb-4">
              <label className="block text-gray-700">a</label>
              <input type="number" className="w-full p-2 border rounded" 
                onChange={(e) => {               
                  seta(e.target.value);
                  }}
               
              />
            </div>

          )
          }
          {figure.name === 'Paralelepipedo' && (
            <div className="mb-4">
              <label className="block text-gray-700">a</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                seta(e.target.value);
                }}
              />
              <label className="block text-gray-700">b</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                setb(e.target.value);
                }}
              />
              <label className="block text-gray-700">c</label>
              <input type="number" className="w-full p-2 border rounded"
              onChange={(e) => {
                setc(e.target.value);
                }
              }
              />
            </div>
          )
          }
          {figure.name === 'Cilindro' && (
            <div className="mb-4">
              <label className="block text-gray-700">Radio:</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                setRadio(e.target.value);
                }
              }
          
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
          {figure.name === 'Cono' && (
            <div className="mb-4">
              <label className="block text-gray-700">Radio:</label>
              <input type="number" className="w-full p-2 border rounded" 
              onChange={(e) => {
                setRadio(e.target.value);
                }
              }
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

export default Modal;
