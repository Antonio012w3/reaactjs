import React from 'react';

const CasaDetails = ({ casa }) => {
  return (
    <div>
      <h2>{casa.titulo}</h2>
      <p>{casa.descripcion}</p>
      <p>Precio: ${casa.precio}</p>
      <p>Habitaciones: {casa.habitaciones}</p>
      {/* Agrega más detalles según tus necesidades */}
    </div>
  );
};

export default CasaDetails;
