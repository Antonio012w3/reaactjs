import React from 'react';

const CasaList = ({ casas, onCasaSelect }) => {
  return (
    <div>
      <h2>Listado de Casas</h2>
      <ul>
        {casas.map((casa) => (
          <li key={casa.id} onClick={() => onCasaSelect(casa)}>
            {casa.titulo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CasaList;
