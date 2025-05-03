import "../css/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I&apos;ve worked on. Click to learn
          more!
        </p>
      </section>

      {/* Project List Section */}
      <section className="project-list">
        <div className="project-item">
          <img
            src="portfolio-img.jpg"
            alt="Portfolio Website"
            className="project-image"
          />
          <div className="project-info">
            <h2>Portfolio Website</h2>
            <p>
              A personal portfolio website showcasing my skills and projects.
            </p>
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-item">
          <img
            src="textutils-img.jpg"
            alt="TextUtils App"
            className="project-image"
          />
          <div className="project-info">
            <h2>TextUtils App</h2>
            <p>
              A text manipulation app that helps with word counting, text
              conversion, and more.
            </p>
            <a
              href="https://textutils.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-item">
          <img src="newsapp-img.jpg" alt="News App" className="project-image" />
          <div className="project-info">
            <h2>News App</h2>
            <p>
              A news aggregator app that fetches the latest headlines from
              various sources.
            </p>
            <a
              href="https://newsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
