import { useState } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header1.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    inquiryType: 'general' // default value
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }

      const data = await response.json();
      setSubmissionStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        contact: '',
        message: '',
        inquiryType: 'general'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setSubmissionStatus({
        loading: false,
        success: false,
        error: error.message || 'Something went wrong'
      });
    }
  };

  return (
    <div>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, perspiciatis consequatur! Sunt nulla voluptate architecto!
      </Header>
      
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
            <a href="http://m.me/big_bang" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/+919145748021" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
          <br />
         
          <div className="query__wrapper">
            <form onSubmit={handleSubmit}>
              <h4>Write Us a Message</h4>
              
              {submissionStatus.success && (
                <div className="alert success">
                  Thank you! Your inquiry has been submitted successfully.
                </div>
              )}
              
              {submissionStatus.error && (
                <div className="alert error">
                  Error: {submissionStatus.error}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  placeholder="Enter name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                    //  style="color: white;"
                     />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input 
                  type="tel" 
                  id="contact"
                  name="contact" 
                  placeholder="Mobile No."
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="inquiryType">Inquiry Type</label>
                <select 
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="classes">Classes</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                disabled={submissionStatus.loading}
                className="btn primary"
              >
                {submissionStatus.loading ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;