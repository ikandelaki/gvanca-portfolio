function Project(props) {
    const {
        name,
        description,
        images,
        isSlider,
        link,
        thumbnail        
    } = props;

    function renderImages() {
        return (
            <div className='Project-Images'>
                {images.map((image) => {
                    return <img src={require(`../../images/${image}`)} alt='project' />;
                })}
            </div>
        );
    }

    console.log(props);
    return (
        <div className='Project' key={name}>
            <h3 className='Project-Title'>{name}</h3>
            <p className='Project-Description'>{description}</p>
            {renderImages()}
        </div>
    );
}

export default Project;