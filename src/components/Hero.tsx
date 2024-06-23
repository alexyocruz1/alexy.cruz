// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-soft-blue text-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="mt-4 text-xl">Frontend Developer | UI/UX Designer</p>
      </div>
    </div>
  );
};

export default Hero;