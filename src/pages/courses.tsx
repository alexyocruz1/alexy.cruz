// src/pages/courses.tsx
import React from 'react';
import Courses from '../components/Courses';

const CoursesPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main>
        <Courses />
      </main>
    </div>
  );
};

export default CoursesPage;