import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Lawn Care',
    description: 'Comprehensive lawn care services to keep your yard looking its best.',
    icon: '/icons/lawncare.jpg',
  },
  {
    title: 'Aeration',
    description: 'Professional aeration services to improve soil health and promote lush growth.',
    icon: '/icons/aeration.jpg',
  },
  {
    title: 'Mulch Installation',
    description: 'Expert mulch installation to enhance the appearance and health of your garden.',
    icon: '/icons/mulch.jpg',
  },
  {
    title: 'Bush Trimming',
    description: 'Precision bush trimming to maintain the shape and health of your shrubs.',
    icon: '/icons/bushtrimming.jpg',
  },
  {
    title: 'Fall or Spring Clean Up',
    description: 'Seasonal clean-up services to prepare your yard for the changing seasons.',
    icon: '/icons/springcleaning.jpg',
  },
  {
    title: 'Sod Installation',
    description: 'Professional sod installation for an instant, beautiful lawn.',
    icon: '/icons/sod.webp',
  },
  {
    title: 'Landscape Installation',
    description: 'Complete landscape installation services to transform your outdoor space.',
    icon: '/icons/landscapeinstall.webp',
  },
  {
    title: 'Other Services',
    description: 'Customized services to meet your unique landscaping needs.',
    icon: '/icons/other.jpg',
  },
];

const Services = () => (
  <div className="services-container">
    <div className="services-header">
      <h1>Our Services</h1>
      <p>Transforming Your Outdoor Spaces through Excellence.</p>
    </div>
    <div className="services-list">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <img src={service.icon} alt={service.title} className="service-icon" />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
