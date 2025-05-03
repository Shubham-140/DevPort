import "../css/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>
          Here are some of the projects I&apos;ve worked on. Click to learn more!
        </p>
      </section>

      {/* Project List Section */}
      <section className="project-list">
        <div className="project-card">
          <div className="project-info">
            <h2>Portfolio Website</h2>
            <p>
              A personal portfolio website showcasing my skills and projects.
            </p>
            <div className="project-links">
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/yourusername/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-info">
            <h2>TextUtils App</h2>
            <p>
              A text manipulation app that helps with word counting, text
              conversion, and more.
            </p>
            <div className="project-links">
              <a
                href="https://textutils.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/yourusername/textutils"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-info">
            <h2>News App</h2>
            <p>
              A news aggregator app that fetches the latest headlines from
              various sources.
            </p>
            <div className="project-links">
              <a
                href="https://newsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/yourusername/newsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;