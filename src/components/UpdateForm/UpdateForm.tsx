import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import {  useAppSelector } from "../../hooks/useTypedSelector";
import useForm from "../../hooks/useFormHook";
import { editUser } from "../../features/user/userSlice";
import { validationUpdate } from "../../helpers/validations";

const UpdateForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const { values, handleChange, handleSubmit, errors } = useForm(
    { ...user, password: "", password2: "" },
    editUser,
    validationUpdate
  );

  useEffect(() => {}, []);

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <h1>Editar datos</h1>
      <hr />
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          value={values.name}
          onChange={handleChange}
          minLength={3}
          maxLength={30}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Apellido"
          name="lastname"
          value={values.lastname}
          onChange={handleChange}
          minLength={3}
          maxLength={30}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo"
          name="email"
          value={values.email}
          onChange={handleChange}
          minLength={10}
          maxLength={50}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Nueva contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Nueva contraseña"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password2">
        <Form.Label>Repita contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repita contraseña"
          name="password2"
          value={values.password2}
          onChange={handleChange}
        />
      </Form.Group>
      <hr />
      <Button variant="primary" className="custom-button" type="submit">
        Editar
      </Button>
      {Object.keys(errors).length !== 0
        ? Object.values(errors).map((error: any, i) => (
            <div key={i} className="register-form-error">
              {error}
            </div>
          ))
        : null}
    </Form>
  );
};

export default UpdateForm;
