import { NavLink } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Description Section */}
        <div className="footer-brand">
          <div className="footer-logo-container">
            <div className="footer-logo">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="white" />
                <path
                  d="M3 12L12 17L21 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 17L12 22L21 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="footer-title">DevPort</h3>
          </div>
          <p className="footer-desc">
            As a passionate full-stack developer, I specialize in creating
            modern web applications using cutting-edge technologies. My
            expertise spans across React, and integrating backend, allowing me
            to build robust, scalable solutions. I focus on delivering
            exceptional user experiences while ensuring optimal performance.
            Let&apos;s collaborate to transform your ideas into impactful
            digital products that drive business success.
          </p>
        </div>

        {/* Quick Links - Single Column */}
        <div className="footer-links-section">
          <h3 className="footer-links-title">Quick Links</h3>
          <nav className="footer-links">
            <NavLink to="/" className="footer-link">
              Home
            </NavLink>
            <NavLink to="/about" className="footer-link">
              About
            </NavLink>
            <NavLink to="/projects" className="footer-link">
              Projects
            </NavLink>
            <NavLink to="/contact" className="footer-link">
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Shubham Singh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
