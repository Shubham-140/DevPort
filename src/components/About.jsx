import "../css/About.css"; // Ensure to create the About.css file for styling

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section for About */}
      <section className="about-hero">
        <h1>About Me</h1>
        <p>
          Hi! My self Shubham Singh, a passionate web developer and software
          engineer.
        </p>
      </section>

      {/* Bio Section */}
      <section className="about-bio">
        <h2>Who I Am</h2>
        <p>
          I am a self-motivated individual with a strong foundation in web
          development, and I specialize in building dynamic and interactive web
          applications. Am constantly learning and improving my skills in both
          frontend and backend technologies. My aim is to create meaningful
          software that impacts people positively.
        </p>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Frontend Development:</strong> React, HTML5, CSS3,
            JavaScript (ES6+), Bootstrap, Tailwind
          </li>
          <li>
            <strong>Problem Solving:</strong> Algorithms, Data Structures,
            Competitive Programming
          </li>
          <li>
            <strong>Computer Science Fundamentals:</strong> DBMS, OOP, OS,
            Computer Networks
          </li>
          <li>
            <strong>System Design:</strong> SOLID Principles, Design Patterns,
            Scalability Concepts
          </li>
          <li>
            <strong>Databases:</strong> MongoDB, MySQL
          </li>
          <li>
            <strong>Version Control:</strong> Git, GitHub, Collaborative
            Development Workflows
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
