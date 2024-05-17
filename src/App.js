import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/header/Header';
import ContactForm from './components/contact/ContactForm';
import AboutComponent from './components/about/AboutComponent';
import PrivacyPolicy from './components/privacy/PrivacyPolicy';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import QRCodePage from './components/qr/QRCodePage';
import './App.css';

const App = () => (
  <HelmetProvider>
    <Router>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Helmet>
                    <title>Home - Green King Landscaping</title>
                  </Helmet>
                  <QRCodePage />
                </>
              } 
            />
            <Route 
              path="/contact" 
              element={
                <>
                  <Helmet>
                    <title>Contact - Green King Landscaping</title>
                  </Helmet>
                  <ContactPage />
                </>
              } 
            />
            <Route 
              path="/about" 
              element={
                <>
                  <Helmet>
                    <title>About - Green King Landscaping</title>
                  </Helmet>
                  <AboutComponent />
                </>
              } 
            />
            <Route 
              path="/privacy" 
              element={
                <>
                  <Helmet>
                    <title>Privacy Policy - Green King Landscaping</title>
                  </Helmet>
                  <PrivacyPolicy />
                </>
              } 
            />
            <Route 
              path="/services" 
              element={
                <>
                  <Helmet>
                    <title>Services - Green King Landscaping</title>
                  </Helmet>
                  <Services />
                </>
              } 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </HelmetProvider>
);

const ContactPage = () => (
  <div>
    <ContactForm />
  </div>
);

export default App;
