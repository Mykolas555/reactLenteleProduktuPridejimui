import Form from 'react-bootstrap/Form';
import React from 'react';
import Button from 'react-bootstrap/Button';

const TableForm = () => {

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSave(formData);
    }
    
    return (
        <>    
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Prekes pavadinimas</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Kaina</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Kiekis</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Button variant="warning">Prideti</Button>
        </Form>
        </>
    )
}

export default TableForm