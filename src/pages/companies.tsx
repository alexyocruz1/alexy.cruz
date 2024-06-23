// pages/companies.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Companies from '../components/Companies';

const CompaniesPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <Companies />
        {/* Add other sections or content as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default CompaniesPage;