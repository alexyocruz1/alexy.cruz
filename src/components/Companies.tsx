// src/components/Companies.tsx
import React from 'react';

const Companies: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Companies I Have Worked With</h2>
      <ul className="list-disc list-inside">
        <li>Company A</li>
        <li>Company B</li>
        <li>Company C</li>
      </ul>
    </div>
  );
};

export default Companies;