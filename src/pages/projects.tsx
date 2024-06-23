// pages/projects.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <Projects />
        {/* Add other sections or content as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;