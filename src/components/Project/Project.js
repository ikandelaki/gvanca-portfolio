import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow/NextArrow";
import PrevArrow from "../PrevArrow/PrevArrow";
import { Link } from "react-router-dom";
import { RouteContext } from "../App/App";
import { useContext } from "react";

function Project(props) {
  const { name, description, images, isSlider, id } = props;
  const { setRoute } = useContext(RouteContext);

  function handleProjectClick() {
    window.scrollTo(0, 0);
    setRoute('projects');
  }

  function renderImages() {
    if (isSlider) {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

      return (
        <div className="Project-Slider">
          <Slider {...settings}>
            {images.map((image, key) => {
            return <img src={require(`../../images/${image}`)} alt="project" key={`${key}-image`} />;
          })}
          </Slider>
        </div>
      );
    }

    return (
      <div className="Project-Images">
        {images.map((image, key) => {
          return <img src={require(`../../images/${image}`)} alt="project" key={`${key}-image`} />;
        })}
      </div>
    );
  }

  return (
    <div className="Project">
      <h3 className="Project-Title">{name}</h3>
      <p className="Project-Description">{description}</p>
      <Link to={`/projects/${id}`} onClick={() => handleProjectClick()}>Project details &rarr;</Link>
      {renderImages()}
    </div>
  );
}

export default Project;
