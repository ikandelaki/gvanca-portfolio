import projectData from '../../utils/data/projects.json';

function ProjectDetails(props) {
    console.log(projectData[props.id]);
    
    return <div>ProjectDetails</div>
}

export default ProjectDetails;