import React from "react";
import { Button, Form } from "react-bootstrap";

const UpdateForm = () => {
  return (
    <Form className="form-container">
      <h1>Editar datos</h1>
      <hr />
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Apellido" name="lastname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo"
          name="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="password"
        />
      </Form.Group>
      <hr />
      <Button variant="primary" className="custom-button" type="submit">
        Editar
      </Button>
    </Form>
  );
};

export default UpdateForm;
