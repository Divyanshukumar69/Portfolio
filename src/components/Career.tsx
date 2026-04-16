import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Dedicated self-learner mastering full-stack web development.
              Built strong foundations in front-end and back-end
              technologies to create dynamic, responsive websites.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>Learning</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Advanced into full-stack app development through focused
              self-study. Developed skills in building intuitive mobile
              applications and seamless digital experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full Stack Developer</h4>
                <h5>Cyber Web Services</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Now freelancing as a dedicated full-stack web and app
              developer. Delivering high-quality dynamic websites, intuitive
              mobile apps, and innovative solutions through Cyber Web
              Services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
