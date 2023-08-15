import { Link } from "react-router-dom";

function ProjectCard(props) {
    const {
        id,
        name,
        thumbnail
    } = props;

    return (
            <div className="ProjectCard">
                <Link to={`${id}`} className="ProjectCard-Link">
                    <h3 className="ProjectCard-Title">{name}</h3>
                    <div className="ProjectCard-Thumbnail">
                        <img src={require(`../../images/${thumbnail}`)} alt={id} />
                    </div>
                </Link>
            </div>
    );
}

export default ProjectCard;