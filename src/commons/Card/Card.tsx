import "./Card.css";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({
  image,
  title,
  id,
  typeFilm,
}: {
  image: string;
  title: string;
  id: number;
  typeFilm: string;
}) => {
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
            <p>10</p>
          </div>
          <div>
            <AiOutlineHeart />
          </div>
          {/* <div>
            <AiFillHeart className="favorite"/>
          </div> */}
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
