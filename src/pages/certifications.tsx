// pages/certifications.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Certifications from '../components/Certifications';

const CertificationsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <Certifications />
        {/* Add other sections or content as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default CertificationsPage;