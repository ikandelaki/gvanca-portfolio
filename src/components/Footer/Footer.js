import { useContext } from "react";
import { RouteContext } from "../App/App";
import projectData from '../../utils/data/projects.json';
import { ProjectContext } from "../App/App";

function Footer() {
    const { route } = useContext(RouteContext);
    const { selectedProjectId } = useContext(ProjectContext);
    const project = selectedProjectId ? projectData[selectedProjectId] : null;

    function renderFooterText() {
        if (route === 'resume' || route === 'contact') return null;

        return (
            <div className="Footer-Contact">
                <p>Interested in working together?</p>
                <p>Email me <strong>ggvansaa@gmail.com</strong></p>
            </div>
        );
    }

    return (
        <div className="Footer">
            {renderFooterText()}
            <div className="Footer-Banner">
                {project ? <p className="Footer-Banner-Copyright">{project.copyright}</p> : null}
            </div>
        </div>
    );
}

export default Footer;