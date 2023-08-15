import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from '../../utils/data/projects.json';

function Projects() {
    function renderProjectCards() {  
        const projects = Object.values(projectData);

        return (
        <>
            { projects.map(data => {
                const {
                    id,
                    name,
                    thumbnail
                } = data;

                return (
                    <ProjectCard id={id} name={name} thumbnail={thumbnail} key={id} />
                )
            }) }
        </>
        );
    }

    return (
        <div className="Projects">
            {renderProjectCards()}
        </div>
    );
}

export default Projects;