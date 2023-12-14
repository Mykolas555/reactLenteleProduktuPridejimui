// TableForm.js
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TableForm = ({ onAddProduct }) => {
  // Būsenos valdymas naudojant 'useState' hook'ą
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  // Funkcija, kuri iškviečiama paspaudus mygtuką "Pridėti"
  const handleSubmit = (e) => {
    e.preventDefault();
    // Sukuriamas naujas produktas pagal įvestus duomenis
    const newProduct = {
      productName,
      price,
      quantity,
    };
    // Iškviečiama funkcija, kuri perduoda naują produktą į pagrindinį komponentą
    onAddProduct(newProduct);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Kontroliuojamo komponento forma su laukais ir mygtuku */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Prekės pavadinimas</Form.Label>
        <Form.Control
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Kaina</Form.Label>
        <Form.Control
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Kiekis</Form.Label>
        <Form.Control
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>
      <Button variant="warning" type="submit">
        Pridėti
      </Button>
    </Form>
  );
};

export default TableForm;