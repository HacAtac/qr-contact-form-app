import React from 'react';
import './QRCodePage.css'; // Import the new CSS file

const QRCodePage = () => (
  <div className="qr-container">
    <h1>Contact Me</h1>
    <p>Scan the QR code to reach the contact form.</p>
    <div className="qr-code-wrapper">
      <img src="/qr-code.png" alt="QR Code" className="qr-code" />
    </div>
  </div>
);

export default QRCodePage;
