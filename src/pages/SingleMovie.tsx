import "../index.css";
import ReactPlayer from "react-player/youtube";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getOne } from "../features/movies/moviesSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { addFav, myUser, remFav } from "../features/user/userSlice";
import { TabTitle } from "../utils";

const SingleMovie = () => {
  const dispatch = useAppDispatch();
  const { id, typeFilm } = useParams();
  const { movie, loadingMovies } = useAppSelector((state) => state.movie);
  const { userLogged } = useAppSelector((state) => state.auth);
  const { user, loading } = useAppSelector((state) => state.user);
  const [flag, setFlag] = useState(false);
  const [movieData, setMovieData] = useState({
    movieId: 0,
    movieTitle: "",
    movieDate: "",
    movieGenre: [],
    email: "",
    typeFilm,
  });

  useEffect(() => {
    if (loading && userLogged) {
      dispatch(myUser(userLogged.payload.id));
    }
    if (!flag && userLogged) {
      dispatch(getOne(`${typeFilm}/${id}`));
      setFlag(true);
    }
    if (flag && movie) {
      if (typeFilm === "movie") {
        setMovieData({
          movieId: Number(id),
          movieTitle: movie!.title,
          movieDate: movie!.release_date,
          movieGenre: [],
          email: userLogged!.payload.email,
          typeFilm,
        });
      } else {
        setMovieData({
          movieId: Number(id),
          movieTitle: movie!.name,
          movieDate: movie!.first_air_date,
          movieGenre: [],
          email: userLogged!.payload.email,
          typeFilm,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, typeFilm, flag, movie, loadingMovies, user, loading]);

  TabTitle(
    `${typeFilm === "movie" ? movie?.title : movie?.name} - The Best TMDB`
  );

  return movie ? (
    <div className="container-fluid single-movie">
      <div className="info-movie">
        <h1>{typeFilm === "movie" ? movie.title : movie.name}</h1>
        <span>
          Titulo original:{" "}
          {typeFilm === "movie" ? movie.original_title : movie.original_name}
        </span>
        <span>
          Fecha:{" "}
          {typeFilm === "movie" ? movie.release_date : movie.first_air_date}{" "}
          {typeFilm === "movie"
            ? `- Duración: ${movie.runtime} minutos. `
            : null}{" "}
        </span>
      </div>
      <hr />
      <div className="cover-trailer">
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          }}
          className="cover-movie"
        ></div>
        {movie.videos?.results[0]?.key ? (
          <div className="trailer-movie">
            <ReactPlayer
              className="player"
              url={`https://www.youtube.com/watch?v=${movie.videos?.results[0]?.key}`}
            />
          </div>
        ) : null}
      </div>
      {movie.overview ? (
        <>
          <hr />
          <div>
            <p className="movie-description">{movie.overview}</p>
          </div>
        </>
      ) : null}

      <hr />
      <div className="options-movie">
        {userLogged ? (
          user!.favorites.find((e) => e.movieId === movie.id) ? (
            <AiFillHeart
              onClick={() => {
                dispatch(remFav(movieData)).then(() =>
                  dispatch(myUser(userLogged!.payload.id))
                );
                setFlag(false);
              }}
            />
          ) : (
            <AiOutlineHeart
              onClick={() => {
                dispatch(addFav(movieData)).then(() =>
                  dispatch(myUser(userLogged!.payload.id))
                );
                setFlag(false);
              }}
            />
          )
        ) : null}
      </div>
    </div>
  ) : null;
};

export default SingleMovie;
