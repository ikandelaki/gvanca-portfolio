import ProjectBanner from "../ProjectBanner/ProjectBanner";
import projectData from '../../utils/data/projects.json';
import Project from '../Project/Project';

function Hero() {
    function renderHeading() {
        return (
            <div className='Hero-Heading'>
                <h1 className='Hero-Heading-Title'>hi <br/> i'm gvantsa</h1>
                <h2 className='Hero-Heading-Description'>Beginner UI/UX designer based in Georgia &lt;3</h2>
            </div>
        );
    }

    function renderProjects() {
        return (
            <div className='Hero-Projects'>
                {projectData.map(data => <Project {...data} />)}
            </div>
        );
    }

    return (
        <div className='Hero'>
            {renderHeading()}
            <ProjectBanner />
            {renderProjects()}
        </div>
    );
}

export default Hero;