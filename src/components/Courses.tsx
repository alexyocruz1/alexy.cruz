// src/components/Courses.tsx
import React from 'react';

const Courses: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Courses Completed</h2>
      <ul className="list-disc list-inside">
        <li>Course 1</li>
        <li>Course 2</li>
        <li>Course 3</li>
      </ul>
    </div>
  );
};

export default Courses;