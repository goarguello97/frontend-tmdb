import React from "react";
import { Carousel } from "react-bootstrap";
import Card from "../commons/Card/Card";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect } from "react";
import { getComedy } from "../features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { Movie } from "../interfaces/movies.interface";
import { TabTitle } from "../utils";

const Comedy = () => {
  const { width } = useMediaQuery();
  const dispatch = useAppDispatch();
  const { comedy } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getComedy());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

TabTitle("Comedía - The Best TMDB")

  return (
    <div className="container-fluid home">
      {width > 768 ? (
        <div className="movies-container">
          {comedy?.map((movie: Movie, i) => (
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
      ) : (
        <Carousel indicators={false}>
          {comedy?.map((movie: Movie, i) => (
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
      )}
    </div>
  );
};

export default Comedy;
