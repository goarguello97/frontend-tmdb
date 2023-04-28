import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="profile">
      <div className="data-profile">
        <div>
          <h1>Mis datos</h1>
          <p>Nombre: Nombre Apellido: Apellido</p>
          <p>Email: Email</p>
          <p>Password: *******</p>
          <Link to="/profile-edit">
            <button className="edit-button">Editar</button>
          </Link>
        </div>
      </div>
      <div className="favorite-profile">
        <div>
          <h1>Mis favoritos</h1>
          <div>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
            <Link to="/movie/id">
              <p className="movie-item">
                Pelicula 1
                <button className="edit-button">
                  <BsFillTrashFill />
                </button>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
