import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './contactMe.css';

function ContactMe() {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (name: string, value: string) => {
    let error = '';
    if (name === 'from_email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = 'Invalid email address';
    }
    if (name === 'phone') {
      const phoneRegex = /^[\d\s\-+()]{7,20}$/;
      if (value && !phoneRegex.test(value)) error = 'Invalid phone number';
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validate(name, value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Final validation check
    const formData = new FormData(form.current);
    const email = formData.get('from_email') as string;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors(prev => ({ ...prev, from_email: 'Please provide a valid email' }));
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        'service_gpnu2yl',
        'template_d3vyxci',
        form.current,
        'xco18G8xkMO41C1X9'
      )
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);
          form.current?.reset();
        },
        (error) => {
          alert('Failed to send message, try again.');
          setIsSending(false);
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section text-center py-5">
      <motion.h2 
        className="contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        CONTACT ME
      </motion.h2>
      
      <motion.p 
        className="contact-description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Feel free to reach out to me for collaboration, project work, or just to say hello!
      </motion.p>

      <div className="contact-divider">
        <div className="divider-line"></div>
      </div>

      <div className="contact-container mx-auto mt-4" style={{ maxWidth: '600px', position: 'relative', minHeight: '400px' }}>
        <AnimatePresence mode="wait">
          {!isSent ? (
            <motion.form 
              key="contact-form"
              ref={form} 
              onSubmit={sendEmail} 
              className="contact-form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="input-group-custom">
                <input 
                  type="text" 
                  name="from_name" 
                  placeholder="Your Name*" 
                  required 
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group-custom">
                <input 
                  type="email" 
                  name="from_email" 
                  placeholder="Your Email*" 
                  required 
                  onChange={handleInputChange}
                  className={errors.from_email ? 'error' : ''}
                />
                {errors.from_email && <span className="error-text"><FaExclamationCircle /> {errors.from_email}</span>}
              </div>

              <div className="input-group-custom">
                <input 
                  type="text" 
                  name="phone" 
                  placeholder="Phone Number" 
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-text"><FaExclamationCircle /> {errors.phone}</span>}
              </div>

              <div className="input-group-custom">
                <textarea 
                  rows={5} 
                  name="message" 
                  placeholder="Your Message*" 
                  required 
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-button ${isSending ? 'loading' : ''}`}
                disabled={isSending || Object.values(errors).some(e => !!e)}
              >
                {isSending ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="success-message"
              className="success-container"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <FaCheckCircle className="success-icon" />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button onClick={() => setIsSent(false)} className="btn-reset mt-3">Send another?</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ContactMe;
