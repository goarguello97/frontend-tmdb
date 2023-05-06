import React from "react";
import { Carousel } from "react-bootstrap";
import Card from "../commons/Card/Card";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import { getDrama } from "../features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { Movie } from "../interfaces/movies.interface";

const Drama = () => {
  const { width } = useMediaQuery();
  const dispatch = useAppDispatch();
  const { drama } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getDrama());
  }, []);
  return (
    <div className="container-fluid home">
      {width > 768 ? (
        <div className="movies-container">
          {drama?.map((movie: Movie, i) => (
            <Card
              key={i}
              image={movie.poster_path}
              title={movie.title}
              id={movie.id}
              typeFilm={"movie"}
            />
          ))}
        </div>
      ) : (
        <Carousel indicators={false}>
          {drama?.map((movie: Movie, i) => (
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

export default Drama;
