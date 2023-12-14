// ProductsTable.js
import React from 'react';
import Table from 'react-bootstrap/Table';

const ProductsTable = ({ products }) => {
  return (
    // Lentelė su stulpeliais ir produktų sąrašu
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Prekės pavadinimas</th>
          <th>Kaina</th>
          <th>Kiekis</th>
        </tr>
      </thead>
      <tbody>
        {/* Atvaizduojami produktai pagal sąrašą */}
        {products.map((product) => (
          // Generate a random ID using Math.random()
          <tr key={Math.random()}>
            {/* Displaying the generated ID */}
            <td>{Math.floor(Math.random() * 100)}</td>
            <td>{product.productName}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductsTable;