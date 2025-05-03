import "../css/Contact.css"; // Ensure to create a corresponding Contact.css file for styling

const Contact = () => {
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
        <p>
          Email:{" "}
          <a href="mailto:shubhamsingh@example.com">shubhamsingh@example.com</a>
        </p>
        <p>
          Phone: <a href="tel:+911234567890">+91-1234567890</a>
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
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />

          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            rows="6"
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
