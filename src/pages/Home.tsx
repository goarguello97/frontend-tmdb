import Carousel from "react-bootstrap/Carousel";
import Card from "../commons/Card/Card";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import { getPopular } from "../features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { Movie, TvSeries } from "../interfaces/movies.interface";
import { myUser } from "../features/user/userSlice";
import { TabTitle } from "../utils";

const Home = () => {
  const { width } = useMediaQuery();
  const dispatch = useAppDispatch();
  const { movies, tvSeries, search } = useAppSelector((state) => state.movies);
  const { userLogged } = useAppSelector((state) => state.auth);
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getPopular());
    if (!user && userLogged) {
      dispatch(myUser(userLogged.payload.id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

TabTitle("The Best TMDB")

  return (
    <div className="container-fluid home">
      {width > 768 ? (
        search ? (
          <>
            <h1>Peliculas </h1>
            <div className="movies-container">
              {search.movies.results?.map((movie: Movie, i) => (
                <Card
                  key={i}
                  image={movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                  typeFilm={"movie"}
                  date={movie.release_date}
                  calification={movie.vote_average}
                />
              ))}
            </div>
            <h1>Series </h1>
            <div className="movies-container">
              {search.tvSeries.results?.map((movie: TvSeries, i) => (
                <Card
                  key={i}
                  image={movie.poster_path}
                  title={movie.name}
                  id={movie.id}
                  typeFilm={"tv"}
                  date={movie.first_air_date}
                  calification={movie.vote_average}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1>Peliculas recomendadas</h1>
            <div className="movies-container">
              {movies?.map((movie: Movie, i) => (
                <Card
                  key={i}
                  image={movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                  date={movie.release_date}
                  typeFilm={"movie"}
                  calification={movie.vote_average}
                />
              ))}
            </div>
            <h1>Series recomendadas</h1>
            <div className="movies-container">
              {tvSeries?.map((movie: TvSeries, i) => (
                <Card
                  key={i}
                  image={movie.poster_path}
                  title={movie.name}
                  id={movie.id}
                  date={movie.first_air_date}
                  typeFilm={"tv"}
                  calification={movie.vote_average}
                />
              ))}
            </div>
          </>
        )
      ) : search ? (
        <>
          <h1>Peliculas </h1>
          <Carousel indicators={false}>
            {search.movies.results?.map((movie: Movie, i) => (
              <Carousel.Item key={i}>
                <Card
                  image={movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                  typeFilm={"movie"}
                  date={movie.release_date}
                  calification={movie.vote_average}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <h1>Series </h1>
          <Carousel indicators={false}>
            {search.tvSeries.results?.map((movie: Movie, i) => (
              <Carousel.Item key={i}>
                <Card
                  image={movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                  date={movie.first_air_date}
                  calification={movie.vote_average}
                  typeFilm={"tv"}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      ) : (
        <>
          {" "}
          <h1>Peliculas recomendadas</h1>
          <Carousel indicators={false}>
            {movies?.map((movie: Movie, i) => (
              <Carousel.Item key={i}>
                <Card
                  image={movie.poster_path}
                  title={movie.title}
                  id={movie.id}
                  typeFilm={"movie"}
                  date={movie.release_date}
                  calification={movie.vote_average}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <h1>Series recomendadas</h1>
          <Carousel indicators={false}>
            {tvSeries?.map((movie: TvSeries, i) => (
              <Carousel.Item key={i}>
                <Card
                  image={movie.poster_path}
                  title={movie.name}
                  id={movie.id}
                  date={movie.first_air_date}
                  typeFilm={"tv"}
                  calification={movie.vote_average}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      )}
    </div>
  );
};

export default Home;
