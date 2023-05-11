import "./LoginForm.css";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useFormHook";
import { login, resetError } from "../../features/user/authSlice";
import { validationLogin } from "../../helpers/validations";
import { LOGIN_INITIAL_VALUES } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const { error, errorPersist, operationOK, userLogged } = useAppSelector(
    (state) => state.auth
  );
  const [flag, setFlag] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, errors } = useForm(
    LOGIN_INITIAL_VALUES,
    login,
    validationLogin
  );

  useEffect(() => {
    if (error || errorPersist) {
      setFlag(true);
      if (flag) {
        setTimeout(() => {
          setFlag(false);
          dispatch(resetError());
        }, 5000);
      }
    }

    if (operationOK || userLogged) {
      setFlag(true);
      if (flag) {
        setTimeout(() => {
          setFlag(false);
          dispatch(resetError());
          navigate("/");
        }, 0);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, errorPersist, operationOK, flag, userLogged]);

  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <h1>Iniciar Sesión</h1>
      <hr />
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
        <Form.Text className="text-muted">
          Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
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
          maxLength={50}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuerdame" />
      </Form.Group>
      <hr />
      <Button variant="primary" className="custom-button" type="submit">
        Iniciar Sesión
      </Button>
      {Object.keys(errors).length !== 0
        ? Object.values(errors).map((error: any, i) => (
            <div key={i} className="login-form-error">
              {error}
            </div>
          ))
        : null}
      {error ? <div className="login-form-error">{error}</div> : null}
      {errorPersist ? (
        <div className="login-form-error">{errorPersist}</div>
      ) : null}

      <hr />
      <Link to="/sign-up">Registrarse</Link>
    </Form>
  );
};

export default LoginForm;
