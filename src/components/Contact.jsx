import { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setFormData({ name: "", email: "", message: "" }); // Clear all fields
    setTimeout(() => {
      setMessageSent(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="contact-container">
      {/* Hero Section for Contact */}
      <section className="contact-hero">
        <h1>Contact Me</h1>
        <p>
          I would love to hear from you! Get in touch for any inquiries or
          opportunities.
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Reach Out</h2>
        Email:{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ss98736538@gmail.com">
          ss98736538@gmail.com
        </a>
        <p>
          Phone: <a href="tel:+911234567890">+91-9560547103</a>
        </p>
        <p>Or, fill out the form below to send a message directly!</p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h2>Send Me a Message</h2>
        <form className="form">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />

          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
            rows="6"
            required
          ></textarea>

          <button
            type="submit"
            className="submit-btn"
            onClick={handleSubmit}
          >
            {messageSent ? "Message Sent ✔" : "Send Message"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;