import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    services: '',
    otherService: '',
    message: '',
    optIn: false
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = { ...formData };
    if (formData.services === 'other') {
      dataToSend.services = formData.otherService;
    }
    delete dataToSend.otherService;

    fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_API_KEY
      },
      body: JSON.stringify(dataToSend)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        showNotification(data.message, 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          services: '',
          otherService: '',
          message: '',
          optIn: false
        });
        setTimeout(() => {
          navigate('/');
        }, 3500); // Redirect after notification disappears
      })
      .catch((error) => {
        console.error('Error:', error);
        showNotification('There was an error submitting the form', 'error');
      });
  };

  const showNotification = (message, type) => {
    const notification = document.getElementById('notification');
    notification.innerText = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        notification.style.display = 'none';
        notification.style.opacity = '1';
      }, 500);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="form-card">
        <h2>Contact Us</h2>
        <p>Please fill out the form below to get in touch with us. We look forward to hearing from you!</p>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="services">Select Service:</label>
            <select id="services" name="services" value={formData.services} onChange={handleChange} required>
              <option value="">Choose a service</option>
              <option value="lawncare">Lawn Care</option>
              <option value="aeration">Aeration</option>
              <option value="mulchinstallation">Mulch Installation</option>
              <option value="bushtrimming">Bush Trimming</option>
              <option value="fallspringcleanup">Fall or Spring Clean Up</option>
              <option value="sodinstallation">Sod Installation</option>
              <option value="landscapeinstallation">Landscape Installation</option>
              <option value="other">Other</option>
            </select>
          </div>
          {formData.services === 'other' && (
            <div className="form-group">
              <label htmlFor="otherService">Other Service:</label>
              <input type="text" id="otherService" name="otherService" value={formData.otherService} onChange={handleChange} required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          {/* <div className="form-group opt-in">
            <label htmlFor="optIn">
              <input type="checkbox" id="optIn" name="optIn" checked={formData.optIn} onChange={handleChange} required />
              I consent to receive communications from Green King Landscaping.
              <span className="tooltip">?
                <span className="tooltiptext">By checking the opt-in box on our contact form, you consent to receive SMS messages from us regarding your inquiries and our services. If you wish to opt-out of receiving these messages, you can do so at any time by replying "STOP" to any message you receive.</span>
              </span>
            </label>
          </div> */}
          <button type="submit">Submit</button>
        </form>
        <div id="notification" className="notification"></div>
      </div>
    </div>
  );
};

export default ContactForm;
