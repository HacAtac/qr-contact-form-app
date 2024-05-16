import React, { useState } from 'react';
import '../../App.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_API_KEY
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        showNotification(data.message, 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          services: '',
          message: ''
        });
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
          <label htmlFor="services">Select Service:</label>
          <select id="services" name="services" value={formData.services} onChange={handleChange} required>
            <option value="">Choose a service</option>
            <option value="landscaping">Landscaping</option>
            <option value="handyman">Handyman Services</option>
            <option value="gardening">Gardening</option>
            <option value="cleaning">Cleaning</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div id="notification" className="notification"></div>
    </div>
  );
};

export default ContactForm;
