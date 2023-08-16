import { useContext } from "react";
import { RouteContext } from "../App/App";

function Footer() {
    const { route } = useContext(RouteContext);

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
            <div className="Footer-Banner"></div>
        </div>
    );
}

export default Footer;