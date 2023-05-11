import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { myUser, remFav, resetUser } from "../features/user/userSlice";
import { TabTitle } from "../utils";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { error, user, loading } = useAppSelector((state) => state.user);
  const { userLogged } = useAppSelector((state) => state.auth);
  const [flag, setFlag] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (flag) {
      dispatch(resetUser());
      setFlag(false);
    }

    if (!user) {
      dispatch(myUser(userLogged!.payload.id));
      setFlag(false);
    }

    if (refresh) {
      dispatch(myUser(userLogged!.payload.id));
      setRefresh(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag, user, refresh]);

  TabTitle(`${user?.name} ${user?.lastname} - The Best TMDB`);

  return loading ? (
    <div className="profile">
      <h1>Cargando...</h1>
    </div>
  ) : user ? (
    <div className="profile">
      <div className="data-profile">
        <div>
          <h1>Mis datos</h1>
          <p>
            Nombre: {user.name} Apellido: {user.lastname}
          </p>
          <p>Email: {user.email}</p>
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
            {user.favorites.map(
              (
                movie: {
                  movieTitle: string;
                  typeFilm: string;
                  movieId: number;
                  movieGenre: [];
                  movieDate: string;
                },
                i
              ) => (
                <div className="movie-container">
                  <Link
                    key={i}
                    to={`/movie-detail/${movie.typeFilm}/${movie.movieId}`}
                  >
                    <p className="movie-item">{movie.movieTitle}</p>
                  </Link>
                  <button
                    className="delete-button"
                    onClick={() => {
                      dispatch(
                        remFav({
                          email: user.email,
                          movieId: movie.movieId,
                          movieTitle: movie.movieTitle,
                          movieDate: movie.movieDate,
                          movieGenre: movie.movieGenre,
                          typeFilm: movie.typeFilm,
                        })
                      ).then(() => setRefresh(true));
                    }}
                  >
                    <BsFillTrashFill />
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="profile">
      <h1>{error}</h1>
    </div>
  );
};

export default Profile;
