// services/casasService.js
const generarDatosAleatorios = () => {
    const cantidadCasas = 10;
    const casas = [];
  
    for (let i = 1; i <= cantidadCasas; i++) {
      casas.push({
        id: i,
        titulo: `Casa ${i}`,
        descripcion: `Descripción de la Casa ${i}. Hermosa propiedad con impresionante vista.`,
        precio: Math.floor(Math.random() * (500000 - 100000 + 1) + 100000), // Precio entre $100,000 y $500,000
        habitaciones: Math.floor(Math.random() * (5 - 2 + 1) + 2), // Entre 2 y 5 habitaciones
        // Agrega más detalles aleatorios según tus necesidades
      });
    }
  
    return casas;
  };
  
  const fetchCasasData = async () => {
    // Simula una llamada a una API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(generarDatosAleatorios());
      }, 1000);
    });
  };
  
  export { fetchCasasData };
  