import ProjectDetails from '../../components/ProjectDetails/ProjectDetails';
import { useParams } from 'react-router-dom';
import { ProjectContext } from '../../components/App/App';
import { useContext, useEffect } from 'react';

function ProjectDetailsRouter() {
    const { id } = useParams();
    const { setSelectedProjectId } = useContext(ProjectContext);

    useEffect(() => {
        setSelectedProjectId(id);

        return () => {
            setSelectedProjectId('');
        }
    }, [id, setSelectedProjectId])

    return <ProjectDetails id={id} />;
}

export default ProjectDetailsRouter;