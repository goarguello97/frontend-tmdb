import "./Card.css";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import { addFav, myUser, remFav } from "../../features/user/userSlice";

const Card = ({
  image,
  title,
  id,
  typeFilm,
  date,
  calification
}: {
  image: string;
  title: string;
  id: number;
  typeFilm: string;
  date: string;
  calification:any
}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { userLogged } = useAppSelector((state) => state.auth);
  const [movieData, setMovieData] = useState({
    movieId: 0,
    movieTitle: "",
    movieDate: "",
    movieGenre: [],
    email: "",
    typeFilm,
  });

  useEffect(() => {
    // if (flag && movie) {
    if (typeFilm === "movie") {
      setMovieData({
        movieId: Number(id),
        movieTitle: title,
        movieDate: date,
        movieGenre: [],
        email: userLogged!.payload.email,
        typeFilm,
      });
    } else {
      setMovieData({
        movieId: Number(id),
        movieTitle: title,
        movieDate: date,
        movieGenre: [],
        email: userLogged!.payload.email,
        typeFilm,
      });
    }
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="card">
      <Link to={`/movie-detail/${typeFilm}/${id}`}>
        <div
          className="cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w342${image})`,
          }}
        ></div>
      </Link>
      <div className="content">
        <div className="content-header">
          <div>
            <AiFillStar />
            <p>{calification}</p>
          </div>
          {userLogged ? (
            user?.favorites.find((e) => e.movieId === id) ? (
              <div>
                <AiFillHeart
                  className="favorite"
                  onClick={() => {
                    dispatch(remFav(movieData)).then(() =>
                      dispatch(myUser(userLogged!.payload.id))
                    );
                  }}
                />
              </div>
            ) : (
              <div>
                <AiOutlineHeart
                  onClick={() => {
                    dispatch(addFav(movieData)).then(() =>
                      dispatch(myUser(userLogged!.payload.id))
                    );
                  }}
                />
              </div>
            )
          ) : null}
        </div>
        <div className="title">
          <h4>
            <Link to={`/movie-detail/${typeFilm}/${id}`}>{title}</Link>
          </h4>
          <Link to={`/movie-detail/${typeFilm}/${id}`}>
            <BsPlayFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
