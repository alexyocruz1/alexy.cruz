// pages/experience.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Experience from '../components/Experience';

const ExperiencePage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <Experience />
        {/* Add other sections or content as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;