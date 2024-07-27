'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const CV = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <section id="cv" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-center mb-4">My Curriculum Vitae</h2>
          <p className="text-center mb-20 text-gray-700">
            Just more about me but more serious
          </p>
        </div>

        <div ref={componentRef} className="bg-white p-6 rounded shadow-2xl">
          {/* Header */}
          <header className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-1">John Doe</h1>
            <p className="text-base mb-1">Phone: (123) 456-7890</p>
            <p className="text-base mb-1">Email: john.doe@example.com</p>
            <p className="text-base">LinkedIn: linkedin.com/in/johndoe</p>
          </header>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Summary</h2>
            <p className="text-sm">
              Software Engineer with 5+ years of experience in web development, specializing in frontend and full-stack development.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Skills</h2>
            <ul className="list-disc list-inside text-sm pl-4">
              <li>JavaScript, React, Node.js</li>
              <li>HTML, CSS, Tailwind CSS</li>
              <li>Git, Docker, AWS</li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Work Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Frontend Developer at Company A</h3>
              <p className="text-sm mb-1">2018-2020</p>
              <ul className="list-disc list-inside text-sm pl-4">
                <li>Developed and maintained the company website using React and Tailwind CSS.</li>
                <li>Collaborated with designers to create a responsive and user-friendly interface.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Full Stack Developer at Company B</h3>
              <p className="text-sm mb-1">2020-2022</p>
              <ul className="list-disc list-inside text-sm pl-4">
                <li>Worked on both frontend and backend development using React, Node.js, and AWS.</li>
                <li>Implemented new features and optimized existing ones for better performance.</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Projects</h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Project A</h3>
              <p className="text-sm">Description of Project A.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Project B</h3>
              <p className="text-sm">Description of Project B.</p>
            </div>
          </section>

          {/* Volunteer Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Volunteer Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Volunteer Role at Organization A</h3>
              <p className="text-sm mb-1">2017-2018</p>
              <ul className="list-disc list-inside text-sm pl-4">
                <li>Assisted in organizing community events and activities.</li>
                <li>Provided technical support for the organization's website.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold">B.Sc. in Computer Science</h3>
              <p className="text-sm">University X, 2014-2018</p>
            </div>
          </section>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download as PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default CV;