import "../css/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>Here are some of the projects I&apos;ve worked on.</p>
      </section>

      {/* Project List Section */}
      <section className="project-list">
        {/* Mad4Movies */}
        <div className="project-card">
          <div className="project-info">
            <h2>🎬 Mad4Movies</h2>
            <p className="project-desc">
              A full-featured React-based movie recommendation web application
              built with Appwrite and TMDb API.
              <span className="highlight"> Features include:</span>
              <ul className="feature-list">
                <li>🔍 Search, filters & personalized recommendations</li>
                <li>🎥 Detailed movie pages with trailers and ratings</li>
                <li>👤 User profiles with watchlists and favorites</li>
                <li>🤖 AI-powered recommendations based on preferences</li>
                <li>🎨 Dark mode, animations, and responsive design</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-label">Tech Stack:</span> React 19,
                Appwrite, TMDb API, Redux Toolkit, Tailwind CSS
              </div>
            </p>
            <div className="project-links">
              <a
                href="https://mad4movies.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Shubham-140/mad4movies"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* QuizMania */}
        <div className="project-card">
          <div className="project-info">
            <h2>🧠 QuizMania</h2>
            <p className="project-desc">
              Ultimate quiz experience with beautiful animations and real-time
              scoring.
              <span className="highlight"> Key features:</span>
              <ul className="feature-list">
                <li>🎮 Dynamic questions with multiple categories</li>
                <li>⏱️ Real-time countdown timer</li>
                <li>📊 Detailed results dashboard with analytics</li>
                <li>🌓 Light/dark theme toggle</li>
                <li>📱 Fully responsive design</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-label">Tech Stack:</span> React 18, Redux
                Toolkit, Vite, CSS-in-JS
              </div>
            </p>
            <div className="project-links">
              <a
                href="https://quizmania.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Shubham-140/QuizMania"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="project-card">
          <div className="project-info">
            <h2>
              ✨ DevPort <span>(current)</span>
            </h2>
            <p className="project-desc">
              My professional portfolio showcasing my skills and projects.
              <span className="highlight"> Features:</span>
              <ul className="feature-list">
                <li>🚀 Modern, minimalist design</li>
                <li>📱 Fully responsive across all devices</li>
                <li>🎨 Smooth animations and transitions</li>
                <li>📝 Interactive project showcases</li>
                <li>📬 Functional contact form</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-label">Tech Stack:</span> React, CSS
                Modules, Framer Motion, Responsive Design
              </div>
            </p>
            <div className="project-links">
              <a
                href="https://devport-two-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Shubham-140/DevPort"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* TextHelper */}
        <div className="project-card">
          <div className="project-info">
            <h2>✏️ TextHelper</h2>
            <p className="project-desc">
              Versatile text utility application for all your text manipulation
              needs.
              <span className="highlight"> Features:</span>
              <ul className="feature-list">
                <li>🔄 Case conversion (upper/lower case)</li>
                <li>📊 Word and character counting</li>
                <li>👁️ Real-time text preview</li>
                <li>📋 Copy to clipboard functionality</li>
                <li>⚡ Instant text transformations</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-label">Tech Stack:</span> React, CSS
                Modules, Clipboard API
              </div>
            </p>
            <div className="project-links">
              <a
                href="https://texthelper1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Shubham-140/TextHelper"
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
