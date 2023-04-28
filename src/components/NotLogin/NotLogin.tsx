import "./NotLogin.css";
import { Link } from "react-router-dom";

const NotLogin = () => {
  return (
    <div className="container-fluid not-login">
      <h1>Por favor, inicia sesión</h1>
      <Link to="/sign-in" className="not-sign-in">
        <p>Iniciar sesión</p>
      </Link>
    </div>
  );
};

export default NotLogin;
