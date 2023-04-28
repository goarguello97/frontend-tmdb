import { Link } from "react-router-dom";
import NotLogin from "../components/NotLogin/NotLogin";

const Favorites = () => {
  return (
    <div className="container-fluid favorites">
      <div className="users">
        <div>
          <h1>Usuarios</h1>
          <p>Aquí podras ver datos y favoritos de otras personas.</p>
        </div>
        <hr />
        <div className="users-container">
          <p>Usuario 1</p>
        </div>
      </div>  
      <div className="user">
        <div>
          <h1>Datos</h1>
          <h3>Nombre Apellido</h3>
          <h4>Correo electronico</h4>
        </div>
        <h2>Favoritos</h2>
        <div className="my-favorites">
          <Link to="/user">Pelicula 1</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 1</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 1</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 1</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 1</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 1</Link>
          <Link to="/user">Pelicula 2</Link>
          <Link to="/user">Pelicula 2</Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
