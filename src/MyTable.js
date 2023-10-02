import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const MyTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make API call and update state
    fetch('http://localhost:3001/cafes')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <Table striped bordered hover variant="dark">
      <thead  >
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.tipo}</td>
            <td>{item.region}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;