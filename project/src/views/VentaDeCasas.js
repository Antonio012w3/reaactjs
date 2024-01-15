import React, { useState, useEffect } from 'react';
import CasaList from './CasaList';
import CasaDetails from './CasaDetails';

const VentaDeCasas = () => {
  const [casas, setCasas] = useState([]);
  const [casasFiltradas, setCasasFiltradas] = useState([]);
  const [selectedCasa, setSelectedCasa] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCasasData();
        setCasas(data);
        setCasasFiltradas(data);
      } catch (error) {
        console.error('Error al obtener datos de casas en VentaDeCasas:', error);
      }
    };

    fetchData();
  }, []);

  const handleCasaSelect = (casa) => {
    setSelectedCasa(casa);
  };

  const handleFiltrosChange = (filtros) => {
    // Implementa lógica de filtrado según tus necesidades
    const casasFiltradas = casas.filter((casa) => {
      return (
        (!filtros.precioMin || casa.precio >= filtros.precioMin) &&
        (!filtros.precioMax || casa.precio <= filtros.precioMax) &&
        // Agrega más condiciones de filtro según tus necesidades
        true // Agrega condiciones adicionales aquí
      );
    });

    setCasasFiltradas(casasFiltradas);
  };

  return (
    <div>
      <h1>Venta de Casas</h1>
      <div style={{ display: 'flex' }}>
        <CasaList casas={casasFiltradas} onCasaSelect={handleCasaSelect} />
        {selectedCasa && <CasaDetails casa={selectedCasa} />}
      </div>
    </div>
  );
};

export default VentaDeCasas;

