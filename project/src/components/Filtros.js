import React, { useState } from 'react';

const Filtros = ({ onFiltrosChange }) => {
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  // Agrega más filtros según tus necesidades

  const aplicarFiltros = () => {
    const filtros = {
      precioMin,
      precioMax,
      // Agrega más filtros aquí
    };
    onFiltrosChange(filtros);
  };

  return (
    <div>
      <h2>Filtros</h2>
      <label>Precio Mínimo: </label>
      <input type="text" value={precioMin} onChange={(e) => setPrecioMin(e.target.value)} />
      <br />
      <label>Precio Máximo: </label>
      <input type="text" value={precioMax} onChange={(e) => setPrecioMax(e.target.value)} />
      <br />
      <button onClick={aplicarFiltros}>Aplicar Filtros</button>
    </div>
  );
};

export default Filtros;
