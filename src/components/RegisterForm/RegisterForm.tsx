import "./RegisterForm.css";
import { Button, Form } from "react-bootstrap";
import useForm from "../../hooks/useFormHook";
import { REGISTER_INITIAL_VALUES } from "../../constants";
import { register, resetError } from "../../features/user/authSlice";
import { validationRegister } from "../../helpers/validations";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {
  const { error, userRegister, operationOK, userLogged } = useAppSelector(
    (state) => state.auth
  );
  const [flag, setFlag] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, errors } = useForm(
    REGISTER_INITIAL_VALUES,
    register,
    validationRegister
  );

  useEffect(() => {
    if (error) {
      setFlag(true);
      if (flag) {
        setTimeout(() => {
          setFlag(false);
          dispatch(resetError());
        }, 5000);
      }
    }

    if (operationOK) {
      setFlag(true);
      if (flag && !userLogged) {
        setTimeout(() => {
          setFlag(false);
          dispatch(resetError());
          navigate("/sign-in");
        }, 5000);
      }
    }

    if (userLogged) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, operationOK, flag, userLogged]);

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <h1>Registro</h1>
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
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="password"
          value={values.password}
          onChange={handleChange}
          minLength={8}
          maxLength={30}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password2">
        <Form.Label>Repita su contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repita su contraseña"
          name="password2"
          value={values.password2}
          onChange={handleChange}
          minLength={8}
          maxLength={30}
          required
        />
      </Form.Group>
      <hr />
      <Button variant="primary" className="custom-button" type="submit">
        Registrarse
      </Button>
      {Object.keys(errors).length !== 0
        ? Object.values(errors).map((error: any, i) => (
            <div key={i} className="register-form-error">
              {error}
            </div>
          ))
        : null}
      {error ? <div className="register-form-error">{error}</div> : null}
      {userRegister ? (
        <div className="register-form-success">{userRegister}</div>
      ) : null}
      <hr />
      <Link to="/sign-in">Iniciar sesión</Link>

    </Form>
  );
};

export default RegisterForm;
