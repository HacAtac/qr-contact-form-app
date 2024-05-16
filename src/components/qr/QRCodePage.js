import React from 'react';
import { Link } from 'react-router-dom';
import './QRCodePage.css'; // Import the new CSS file

const QRCodePage = () => (
  <div className="qr-container">
    <h1>Contact Me</h1>
    <p>Scan the QR code to reach the contact form.</p>
    <div className="qr-code-wrapper">
      <img src="/qr-code.png" alt="QR Code" className="qr-code" />
    </div>
    <p>Or click the button below to go directly to the contact form:</p>
    <Link to="/contact">
      <button className="contact-button">We want to hear from you!</button>
    </Link>
  </div>
);

export default QRCodePage;
