import React from 'react';
import './ContactMe.css';

function ContactMe() {
  return (
    <section id="contact" className="contact-section text-center py-5">
      <h2 className="contact-heading">CONTACT</h2>
      <p className="contact-description">
        Feel free to reach out to me for collaboration, project work, or just to say hello!
      </p>

      <div className="contact-divider">
        <div className="divider-line"></div>
      </div>

      <form className="contact-form mx-auto mt-4">
        <input type="text" placeholder="Your Name*" required />
        <input type="email" placeholder="Your Email*" required />
        <input type="text" placeholder="Phone Number" />
        <textarea rows={5} placeholder="Your Message*" required></textarea>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
}

export default ContactMe;
