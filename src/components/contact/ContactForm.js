import React, { useState } from 'react';
import './ContactForm.css'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    services: '',
    otherService: '',
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
      .then((response) => response.json())
      .then((data) => {
        showNotification(data.message, 'success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          services: '',
          otherService: '',
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
        <button type="submit">Submit</button>
      </form>
      <div id="notification" className="notification"></div>
    </div>
  );
};

export default ContactForm;
