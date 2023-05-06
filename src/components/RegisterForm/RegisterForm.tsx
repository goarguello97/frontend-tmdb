import "./RegisterForm.css";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useFormHook";
import { REGISTER_INITIAL_VALUES } from "../../constants";
import { register } from "../../features/user/authSlice";
import { validationRegister } from "../../helpers/validations";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate;

  const { values, handleChange, handleSubmit, errors } = useForm(
    REGISTER_INITIAL_VALUES,
    register,
    validationRegister
  );

  useEffect(() => {}, []);

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <h1>Registro</h1>
      <hr />
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Apellido"
          name="lastname"
          value={values.lastname}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Repita su contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repita su contraseña"
          name="password2"
          value={values.password2}
          onChange={handleChange}
        />
      </Form.Group>
      <hr />
      <Button variant="primary" className="custom-button" type="submit">
        Registrarse
      </Button>
      {Object.keys(errors).length !== 0
        ? Object.values(errors).map((error: any, i) => (
            <div key={i} className="login-form-error">
              {error}
            </div>
          ))
        : null}
    </Form>
  );
};

export default RegisterForm;
