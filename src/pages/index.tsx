// pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* Add other sections or content as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;