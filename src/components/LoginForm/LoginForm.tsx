import "./LoginForm.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <Form className="form-container">
      <h1>Iniciar Sesión</h1>
      <hr />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su correo"
          name="email"
        />
        <Form.Text className="text-muted">
          Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recuerdame" />
      </Form.Group>
      <hr />
      <Button variant="primary" className="custom-button" type="submit">
        Iniciar Sesión
      </Button>
      <hr />
      <Link to="/sign-up">Registrarse</Link>
    </Form>
  );
};

export default LoginForm;
