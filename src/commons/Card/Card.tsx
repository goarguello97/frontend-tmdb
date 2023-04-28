import "./Card.css";
import { AiFillStar, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import cover from "../../assets/img/johnwick.jpg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <div className="cover" style={{ backgroundImage: `url(${cover})` }}></div>
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
          <h4><Link to="/movie">John Wick 4</Link></h4>
          <BsPlayFill />
        </div>
      </div>
    </div>
  );
};

export default Card;
