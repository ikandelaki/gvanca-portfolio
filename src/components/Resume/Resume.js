function Resume() {
  return (
    <>
      <div className="Resume-Name">Gvantsa MAMUKASHVILI</div>
      <div className="Resume-Details">
        <div className="Resume-Details-Left">
          <div className="Resume-Details-Image">
            <img src={require("../../images/gvanca.png")} alt="pfp" />
          </div>
          <div className="Resume-Name-Mobile">Gvantsa MAMUKASHVILI</div>
          <div className="Resume-Detail Resume-Details-Contact">
            <h3 className="Resume-Details-Title">Contact</h3>
            <p className="Resume-Details-Bullet_Points">+995 598 360 705</p>
            <p className="Resume-Details-Bullet_Points">ggvansaa@gmail.com</p>
            <p className="Resume-Details-Bullet_Points">Tbilisi, Georgia</p>
          </div>
          <div className="Resume-Detail Resume-Details-Relevant_Skills">
            <h3 className="Resume-Details-Title">Relevant Skills</h3>
            <p className="Resume-Details-Bullet_Points">Figma</p>
            <p className="Resume-Details-Bullet_Points">Canvas</p>
          </div>
          <div className="Resume-Detail Resume-Details-Skills">
            <h3 className="Resume-Details-Title">Skills</h3>
            <p className="Resume-Details-Bullet_Points">
              Open communication style
            </p>
            <p className="Resume-Details-Bullet_Points">Flexible team player</p>
            <p className="Resume-Details-Bullet_Points">Problem-Solving</p>
            <p className="Resume-Details-Bullet_Points">Detail-Oriented </p>
            <p className="Resume-Details-Bullet_Points">Planning</p>
          </div>
          <div className="Resume-Detail Resume-Details-Languages">
            <h3 className="Resume-Details-Title">Languages</h3>
            <p className="Resume-Details-Bullet_Points">Georgian - Native</p>
            <p className="Resume-Details-Bullet_Points">
              English - Intermediate
            </p>
            <p className="Resume-Details-Bullet_Points">
              Russian - Intermediate
            </p>
          </div>
        </div>
        <div className="Resume-Details-Right">
          <div className="Resume-Details-Executive">
            <h3 className="Resume-Details-Title">Executive Summary</h3>
            <p className="Resume-Details-Description">
              I've always had a passion for design, so when I shad and
              opportunity to learn web design on my own, I jumped right in. I
              started my journey on 7.11.2023 and I am learning day by day. I'm
              really excited to start working on different projects since that's
              how I learn best. The more projects, the better!
            </p>
          </div>
          <div className="Resume-Details-Education">
            <h3 className="Resume-Details-Title">Education</h3>
            <div className="Resume-Details-Education-Details">
              <p className="Resume-Details-Years">2020-2024</p>
              <p className="Resume-Details-Education-Details-Place">
                Faculty of Business Administration - Management
              </p>
              <p className="Resume-Details-Education-Details-University">
                International Black Sea University
              </p>
              <ul className="Resume-Details-Education-Details-Faculty">
                <li>English Sector</li>
                <li>50% Scholarship from the university</li>
              </ul>
            </div>
            <div className="Resume-Details-Education-Details">
              <p className="Resume-Details-Years">2020-2024</p>
              <p className="Resume-Details-Education-Details-Place">
                №22 Public School
              </p>
            </div>
          </div>
          <div className="Resume-Details-Experience">
            <h3 className="Resume-Details-Title">Work experience</h3>
            <div className="Resume-Details-Experience-Details">
              <p className="Resume-Details-Years">2023 - now</p>
              <p className="Resume-Details-Education-Details-Place">
                Marketing Agent
              </p>
              <p className="Resume-Details-Workplace">Marjan Plaza Hotel</p>
            </div>
            <div className="Resume-Details-Experience-Details">
              <p className="Resume-Details-Years">2022 Oct - 2023</p>
              <p className="Resume-Details-Education-Details-Place">
                Brand manager/SEO assistant
              </p>
              <p className="Resume-Details-Workplace">Archeotour</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
