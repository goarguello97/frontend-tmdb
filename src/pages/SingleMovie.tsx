import "../index.css";
import ReactPlayer from "react-player/youtube";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import cover from "../assets/img/johnwick.jpg";
import { useParams } from "react-router-dom";
import { getOne } from "../features/movies/moviesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { isNonNullChain } from "typescript";

const SingleMovie = () => {
  const dispatch = useAppDispatch();
  const { id, typeFilm } = useParams();
  const { movie } = useAppSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getOne(`${typeFilm}/${id}`));
  }, []);
  console.log(movie);
  return (
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
        <AiOutlineHeart />
        <AiFillHeart />
      </div>
    </div>
  );
};

export default SingleMovie;
