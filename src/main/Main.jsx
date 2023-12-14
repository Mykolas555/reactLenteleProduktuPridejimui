// Main.js
import React, { useState } from 'react';
import TableForm from '../form/TableForm';
import ProductsTable from '../table/ProductsTable';

const Main = () => {
  // Būsenos valdymas naudojant 'useState' hook'ą
  const [products, setProducts] = useState([]);

  // Funkcija, kuri prideda naują produktą į sąrašą
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <h2>Produktų Forma</h2>
      {/* TableForm komponentas, kuriame perduodama funkcija handleAddProduct */}
      <TableForm onAddProduct={handleAddProduct} />
      <h2>Produktų lentelė</h2>
      {/* ProductsTable komponentas, kuriame perduodamas produktų sąrašas */}
      <ProductsTable products={products} />
    </>
  );
};

export default Main;