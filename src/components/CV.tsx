'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const clients = [
  {
    name: 'Beaches',
    details: [
      <>Worked directly making changes for <a href="https://beaches.com" target="_blank" rel="noopener noreferrer" className="font-bold">Beaches.com</a></>,
      'Delivered high-priority tasks following a delivery process and the best coding practices',
      'Publication and planning of releases from development to production environments',
      'Integration of APIs inside the site'
    ],
    image: '/Assets/Experience/beaches.png',
  },
  {
    name: 'Sandals',
    details: [
      <>Worked directly making changes for <a href="https://sandals.com" target="_blank" rel="noopener noreferrer" className="font-bold">Sandals.com site</a></>,
      <>Led a team for planning and refactoring of <a href="https://sandals.com/weddings/" target="_blank" rel="noopener noreferrer" className="font-bold">Sandals Weddings</a> and all related pages inside the brand</>,
      'Worked on creating experiments with the conversion rate team using AB Tasty and Optimizely',
      'Delivered high-priority tasks following a delivery process and the best coding practices',
      'Publication and planning of releases from development to production environments',
      'Implemented SEO and accessibility best practices',
      'Integration of APIs inside the site'
    ],
    image: '/Assets/Experience/sandals.png',
  },
  {
    name: 'Experenta',
    details: [
      'Adapted Salesforce to the company’s daily processes',
      'Integrated multiple external systems into Salesforce, including QuickBooks and SAP',
      'Developed custom apps through Lightning, Apex, and LWC',
      'Migrated information from one system to Salesforce',
      'Configured and set up users and permissions inside Salesforce'
    ],
    image: '/Assets/Experience/experenta.png',
  },
  {
    name: 'Jaremar',
    details: [
      'Optimized high-demand processes using batches, scheduled Apex, and queues',
      'Refactored old code without affecting the company’s processes',
    ],
    image: '/Assets/Experience/jaremar.png',
  },
  {
    name: 'Cadelga',
    details: [
      'Synchronized SAP application and Salesforce through Apex',
      'Optimized high-demand processes using batches, scheduled Apex, and queues',
    ],
    image: '/Assets/Experience/cadelga.png',
  },
  {
    name: 'DelCampo School',
    details: [
      'Built a high school enrollment system inside Salesforce',
      'Built a high school platform system for staff inside a Salesforce community site',
      'Built a high school platform system for parents inside a Salesforce community site',
    ],
    image: '/Assets/Experience/delcampo.png',
  },
];

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
            <h1 className="text-3xl font-bold mb-1">Alexy Cruz</h1>
            <div className="flex justify-center items-center space-x-4 border-t border-b border-gray-300 py-2">
              <p className="text-base border-r border-gray-300 pr-4">Phone: +52 984 450 5332</p>
              <p className="text-base border-r border-gray-300 pr-4">Email: alexyocruz1@gmail.com</p>
              <p className="text-base"><a href="https://www.linkedin.com/in/alexy-cruz-72777114b/">LinkedIn: linkedin.com/in/alexy-cruz</a></p>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <div className='mb4'>
              <p className="text-sm">
                Throughout my career as a Full Stack Developer, I have remained committed to staying up-to-date with the latest 
                industry trends and best practices. I thrive in fast-paced environments, leveraging my adaptability to quickly 
                learn new technologies and incorporate them into my workflow. My experience spans a wide range of technologies, 
                including React, Node.js, and Salesforce, among others. I have a proven track record of delivering dynamic and 
                responsive web applications that meet client needs and exceed expectations.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-xl font-bold mb-2">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-bold">Coding</h3>
                <ul className="list-disc list-inside text-sm pl-4">
                  <li>React JS</li>
                  <li>Node JS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Express JS</li>
                  <li>Java</li>
                  <li>Next JS</li>
                  <li>Vue JS</li>
                  <li>Flutter</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">CSS</h3>
                <ul className="list-disc list-inside text-sm pl-4">
                  <li>Bootstrap</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">Markup</h3>
                <ul className="list-disc list-inside text-sm pl-4">
                  <li>Freemarker</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">DB</h3>
                <ul className="list-disc list-inside text-sm pl-4">
                  <li>Mongo DB</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">CRM</h3>
                <ul className="list-disc list-inside text-sm pl-4">
                  <li>Salesforce</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">Version Control</h3>
                <ul className="list-disc list-inside text-sm pl-4">
                  <li>Github</li>
                  <li>Git</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">DevOps</h3>
                <ul className="list-disc list-inside text-sm pl-4">
                  <li>Heroku</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">AB Test</h3>
                <ul className="list-disc list-inside text-sm pl-4">
                  <li>Optimizely</li>
                  <li>AB Tasty</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-xl font-bold mb-2">Work Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Full-time Frontend Developer at Unique Vacations</h3>
              <p className="text-sm mb-1">March 2021 - Present</p>
              <ul className="list-disc list-inside text-sm pl-4">
                <li>Worked directly making changes for <a href="https://beaches.com" target="_blank" rel="noopener noreferrer" className="font-bold">Beaches.com</a></li>
                <li>Delivered high-priority tasks following a delivery process and the best coding practices</li>
                <li>Publication and planning of releases from development to production environments</li>
                <li>Integration of APIs inside the site</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Full-time Full Stack Developer / Salesforce Developer at Experenta</h3>
              <p className="text-sm mb-1">April 2019 - Present</p>
              <ul className="list-disc list-inside text-sm pl-4">
                <li>Adapted Salesforce to the company’s daily processes</li>
                <li>Integrated multiple external systems into Salesforce, including QuickBooks and SAP</li>
                <li>Developed custom apps through Lightning, Apex, and LWC</li>
                <li>Migrated information from one system to Salesforce</li>
                <li>Configured and set up users and permissions inside Salesforce</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-xl font-bold mb-2">Projects</h2>
            {clients.map((client, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-bold">{client.name}</h3>
                <ul className="list-disc list-inside text-sm pl-4">
                  {client.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Volunteer Experience */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-xl font-bold mb-2">Volunteer Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Hogar de Amor y Esperanza</h3>
              <p className="text-sm mb-1">2020-2021</p>
              <ul className="list-disc list-inside text-sm pl-4">
                <li>Create a courses and students management website</li>
                <li>Create a donations and campaigns website</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-xl font-bold mb-2">Education</h2>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Computer System Engineering</h3>
              <p className="text-sm">UNITEC, Tegucigalpa - Honduras, June 2014 – December 2020</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-bold">Bachelor of Science and Letters</h3>
              <p className="text-sm">Ixo School, Tegucigalpa - Honduras, August 2012 – June 2014</p>
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