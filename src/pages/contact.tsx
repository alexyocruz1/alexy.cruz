// pages/contact.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <ContactForm />
        {/* Add other sections or content as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;