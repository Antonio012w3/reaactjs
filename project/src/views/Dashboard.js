import React, { useState, useEffect } from 'react';
import VentaDeCasas from './VentaDeCasas';
import Filtros from '../components/Filtros';
import { fetchCasasData } from '../services/casasService';

const Dashboard = () => {
  const [casas, setCasas] = useState([]);
  const [filtros, setFiltros] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCasasData();
        setCasas(data);
      } catch (error) {
        console.error('Error al obtener datos de casas en Dashboard:', error);
      }
    };

    fetchData();
  }, []);

  const handleFiltrosChange = (nuevosFiltros) => {
    setFiltros(nuevosFiltros);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Filtros onFiltrosChange={handleFiltrosChange} />
      <VentaDeCasas casas={casas} filtros={filtros} />
    </div>
  );
};

export default Dashboard;

