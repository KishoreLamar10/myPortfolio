import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

function ContactMe() {
  const form = useRef<HTMLFormElement>(null); // Type-safe ref

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_gpnu2yl',       // ✅ Your Service ID
        'template_d3vyxci',      // ✅ Your Template ID
        form.current,
        'xco18G8xkMO41C1X9'      // ✅ Your Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          alert('Failed to send message, try again.');
          console.error(error);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact-section text-center py-5">
      <h2 className="contact-heading">CONTACT ME</h2>
      <p className="contact-description">
        Feel free to reach out to me for collaboration, project work, or just to say hello!
      </p>

      <div className="contact-divider">
        <div className="divider-line"></div>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form mx-auto mt-4">
        <input type="text" name="from_name" placeholder="Your Name*" required />
        <input type="email" name="from_email" placeholder="Your Email*" required />
        <input type="text" name="phone" placeholder="Phone Number" />
        <textarea rows={5} name="message" placeholder="Your Message*" required></textarea>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
}

export default ContactMe;
