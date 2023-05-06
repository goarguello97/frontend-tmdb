import Carousel from "react-bootstrap/Carousel";
import Card from "../commons/Card/Card";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import { getPopular } from "../features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { Movie, TvSeries } from "../interfaces/movies.interface";

const Home = () => {
  const { width } = useMediaQuery();
  const dispatch = useAppDispatch();
  const { movies, tvSeries} = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  return (
    <div className="container-fluid home">
      {width > 768 ? (
        <>
          <h1>Peliculas recomendadas</h1>
          <div className="movies-container">
            {movies?.map((movie: Movie, i) => (
              <Card
                key={i}
                image={movie.poster_path}
                title={movie.title}
                id={movie.id}
                typeFilm={"movie"}
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
                typeFilm={"tv"}
              />
            ))}
          </div>
        </>
      ) : (
        <Carousel indicators={false}>
          {movies?.map((movie: Movie, i) => (
            <Carousel.Item key={i}>
              <Card
                image={movie.poster_path}
                title={movie.title}
                id={movie.id}
                typeFilm={"movie"}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Home;
