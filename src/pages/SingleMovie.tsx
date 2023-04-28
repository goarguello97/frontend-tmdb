import "../index.css";
import ReactPlayer from "react-player/youtube";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import cover from "../assets/img/johnwick.jpg";

const SingleMovie = () => {
  return (
    <div className="container-fluid">
      <div className="info-movie">
        <h1>Titulo</h1>
        <span>Titulo original: Titulo</span>
        <span>año : duración</span>
      </div>
      <hr />
      <div className="cover-trailer">
        <div
          style={{ backgroundImage: `url(${cover})` }}
          className="cover-movie"
        ></div>
        <div className="trailer-movie">
          <ReactPlayer className="player" url="https://www.youtube.com/watch?v=OkC_YaSFBHA&ab_channel=SensaCineTRAILERS" />
        </div>
      </div>
      <hr />
      <div>
        <p>
          John Wick (Keanu Reeves) descubre un camino para derrotar a la Alta
          Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un
          nuevo rival con poderosas alianzas en todo el mundo, capaz de
          convertir a viejos amigos en enemigos.
        </p>
      </div>
      <hr />
      <div className="options-movie">
        <AiOutlineHeart />
        <AiFillHeart />
      </div>
    </div>
  );
};

export default SingleMovie;
