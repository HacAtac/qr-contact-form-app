import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => (
  <div className="privacy-container">
    <div className="privacy-header">
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. Please read the following to learn about our privacy practices.</p>
    </div>
    <div className="privacy-content">
      <section className="privacy-section">
        <h2>Information We Collect</h2>
        <p>
          We collect personal information from you when you fill out our contact form. This information includes your name, email address, phone number, address, services you are interested in, and any other information you choose to provide.
        </p>
      </section>
      <section className="privacy-section">
        <h2>How We Use Your Information</h2>
        <p>
          The information we collect from you is used to respond to your inquiries, provide the services you request, and improve our services. We may also use your information to contact you with sms text using trilio, newsletters, marketing or promotional materials, and other information that may be of interest to you.
        </p>
      </section>
      <section className="privacy-section">
        <h2>Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
        </p>
      </section>
      <section className="privacy-section">
        <h2>Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
        </p>
      </section>
      <section className="privacy-section">
        <h2>Your Consent</h2>
        <p>
          By using our site, you consent to our website's privacy policy.
        </p>
      </section>
      <section className="privacy-section">
        <h2>Changes to Our Privacy Policy</h2>
        <p>
          If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change.
        </p>
      </section>
      <section className="privacy-section">
        <h2>Contacting Us</h2>
        <p>
          If there are any questions regarding this privacy policy, you may contact us using the information below:
        </p>
        <p>
          [Your Company Name] <br />
          [Company Address] <br />
          [City, State, Zip Code] <br />
          [Email Address] <br />
          [Phone Number]
        </p>
      </section>
    </div>
  </div>
);

export default PrivacyPolicy;
