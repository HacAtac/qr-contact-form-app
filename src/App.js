import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ContactForm from './components/contact/ContactForm';
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
