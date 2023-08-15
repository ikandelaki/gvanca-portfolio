function Project(props) {
  const { name, description, images } = props;

  function renderImages() {
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
      {renderImages()}
    </div>
  );
}

export default Project;
