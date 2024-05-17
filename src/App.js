import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ContactForm from './components/contact/ContactForm';
import AboutComponent from './components/about/AboutComponent';
import PrivacyPolicy from './components/privacy/PrivacyPolicy';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import QRCodePage from './components/qr/QRCodePage';
import './App.css';

const App = () => (
  <Router>
    <div className="page-container">
      <Header />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<QRCodePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

const ContactPage = () => (
  <div>
    <ContactForm />
  </div>
);

export default App;
