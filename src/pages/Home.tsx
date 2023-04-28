import Carousel from "react-bootstrap/Carousel";
import Card from "../commons/Card/Card";
import useMediaQuery from "../hooks/useMediaQuery";

const Home = () => {
  const { width } = useMediaQuery();
  return (
    <div className="container-fluid home">
      {width > 768 ? (
        <div className="movies-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      ) : (
        <Carousel indicators={false}>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
          <Carousel.Item>
            <Card />
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
};

export default Home;
