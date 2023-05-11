import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { getUsers } from "../features/user/usersSlice";
import { User } from "../interfaces/users.interface";
import { myUser, resetUser } from "../features/user/userSlice";
import { TabTitle } from "../utils";

const Favorites = () => {
  const dispatch = useAppDispatch();
  const { users, loading } = useAppSelector((state) => state.users);
  const { user } = useAppSelector((state) => state.user);
  // Bandera para cargar el usuario
  const [flag, setFlag] = useState(false);
  // Bandera para resetear el usuario
  const [reLoading, setReLoading] = useState(false);

  useEffect(() => {
    if (!users) {
      dispatch(getUsers());
    }

    if (!reLoading) {
      dispatch(resetUser());
      setReLoading(true);
    }

    if (flag) {
      setFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, flag, user, users]);

  TabTitle(`Usuarios - The Best TMDB`);

  return (
    <div className="container-fluid favorites">
      <div className="users">
        <div>
          <h1>Usuarios</h1>
          <p>Aquí podras ver datos y favoritos de otras personas.</p>
        </div>
        <hr />
        <div className="users-container">
          {loading ? <p>Cargando...</p> : null}
          {users?.map((user: User, i) => (
            <p
              onClick={() => {
                dispatch(myUser(user!.id));
                setFlag(true);
              }}
            >
              {user.name} {user.lastname}
            </p>
          ))}
        </div>
      </div>
      <div className="user">
        <div className="user-data">
          <h1>Datos</h1>
          {!user ? (
            <h3>No hay datos</h3>
          ) : (
            <>
              <h3>
                {user.name} {user.lastname}
              </h3>
              <h4>{user.email}</h4>
              <button onClick={() => dispatch(resetUser())} className="sign-in">
                Limpiar
              </button>
            </>
          )}
        </div>
        <h2>Favoritos</h2>

        <div className="my-favorites">
          {!user ? (
            <h3>No hay datos</h3>
          ) : (
            user.favorites?.map((movie: any, i) => (
              <Link to={`/movie-detail/${movie.typeFilm}/${movie.movieId}`}>
                {movie.movieTitle}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
