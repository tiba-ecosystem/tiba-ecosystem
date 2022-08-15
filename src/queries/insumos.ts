const fetchQueryResult = (query: string) => {
  return fetch('http://34.192.200.70/api/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const obtenerInsumos = () => {
  return fetchQueryResult(`
    {
      insumos {
        id
        nombre
        categoria
        stock
        peso
        largo
        alto
      }
    }
  `);
};
