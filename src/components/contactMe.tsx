import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email address';
    }
    if (name === 'phone') {
      if (value && !/^[\d\s\-+()]{7,20}$/.test(value)) error = 'Invalid phone number';
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validate(e.target.name, e.target.value);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    const email = new FormData(form.current).get('from_email') as string;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors(prev => ({ ...prev, from_email: 'Please provide a valid email' }));
      return;
    }
    setIsSending(true);
    emailjs
      .sendForm('service_gpnu2yl', 'template_d3vyxci', form.current, 'xco18G8xkMO41C1X9')
      .then(
        () => { setIsSent(true); setIsSending(false); form.current?.reset(); },
        (err) => { alert('Failed to send message, try again.'); setIsSending(false); console.error(err); }
      );
  };

  return (
    <section id="contact" className="contact-section">
      {/* Dual-layer heading */}
      <div className="contact-heading-block">
        <motion.div
          className="dual-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="dual-front">LET'S WORK</span>
          <span className="dual-ghost">LET'S WORK</span>
        </motion.div>
        <motion.div
          className="dual-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="dual-front">TOGETHER</span>
          <span className="dual-ghost contact-ghost-muted">TOGETHER</span>
        </motion.div>
      </div>

      {/* Form */}
      <div className="contact-form-wrapper">
        <AnimatePresence mode="wait">
          {!isSent ? (
            <motion.form
              key="form"
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="form-row">
                <div className="input-group-custom">
                  <label>Name</label>
                  <input type="text" name="from_name" placeholder="Your Name" required onChange={handleInputChange} />
                </div>
                <div className="input-group-custom">
                  <label>Email</label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    required
                    onChange={handleInputChange}
                    className={errors.from_email ? 'error' : ''}
                  />
                  {errors.from_email && <span className="error-text"><FaExclamationCircle /> {errors.from_email}</span>}
                </div>
              </div>

              <div className="input-group-custom">
                <label>Phone <span className="optional">(optional)</span></label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-text"><FaExclamationCircle /> {errors.phone}</span>}
              </div>

              <div className="input-group-custom">
                <label>Message</label>
                <textarea rows={5} name="message" placeholder="Tell me about your project..." required onChange={handleInputChange} />
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
              key="success"
              className="success-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
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
