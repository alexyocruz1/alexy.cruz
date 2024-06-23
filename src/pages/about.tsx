// pages/about.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <About />
        {/* Add other sections or content as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;