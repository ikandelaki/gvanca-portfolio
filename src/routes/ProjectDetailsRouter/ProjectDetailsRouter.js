import ProjectDetails from '../../components/ProjectDetails/ProjectDetails';
import { useParams } from 'react-router-dom';

function ProjectDetailsRouter() {
    const { id } = useParams();

    return <ProjectDetails id={id} />;
}

export default ProjectDetailsRouter;