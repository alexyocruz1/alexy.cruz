// src/components/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="list-disc list-inside">
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </div>
  );
};

export default Projects;