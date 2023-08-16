import projectData from '../../utils/data/projects.json';
import { Link } from 'react-router-dom';
import BackArrow from "../../icons/back-arrow.svg";
import BackArrowDark from "../../icons/back-arrow-dark.svg";
import { useContext } from "react";
import { ThemeContext } from "../App/App";


function ProjectDetails(props) {
    const { darkTheme } = useContext(ThemeContext);

    const data = projectData[props.id];

    const {
        name,
        paragraphs,
        pdpImages,
        link
    } = data;
    
    return (
        <div className="ProjectDetails">
            <Link to="/projects" className="ProjectDetails-BackBtn">
                <img src={darkTheme ? BackArrowDark : BackArrow} /> Projects
            </Link>
            <h2 className="ProjectDetails-Title">{name}</h2>
            <div className="ProjectDetails-Content">
                <div className="ProjectDetails-Content-Box ProjectDetails-Content-Purpose">
                    <div>
                        <h3>Goal</h3>
                        <p>{paragraphs[0]}</p>
                    </div>
                    <div>
                        <img src={require(`../../images/${pdpImages[0]}`)} alt="" />
                        <Link to={link} target="_blank">Click to open a prototype</Link>
                    </div>
                </div>
                <div className="ProjectDetails-Content-Box ProjectDetails-Content-Milestones">
                    <div>
                        <h3>Milestones</h3>
                        <p>{paragraphs[1]}</p>
                    </div>
                    <div>
                        <img src={require(`../../images/${pdpImages[1]}`)} alt="" />
                    </div>
                </div>
                <div className="ProjectDetails-Content-Box ProjectDetails-Content-Takeaways">
                    <div>
                        <h3>Takeaways</h3>
                        <p>{paragraphs[2]}</p>
                    </div>
                    <div>
                        <img src={require(`../../images/${pdpImages[2]}`)} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;