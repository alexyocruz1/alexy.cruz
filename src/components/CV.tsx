'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const clients = [
  {
    name: 'Jaremar',
    details: [
      'Optimized high-demand processes using batch jobs, scheduled Apex, and queues',
      'Refactored legacy code without disrupting business processes',
      'Redesigned and developed a new mobile application using Flutter (Android/iOS), replacing a legacy system and improving performance and user experience',
    ],
    image: '/Assets/Experience/jaremar.png',
  },
  {
    name: 'Cadelga',
    details: [
      'Synced SAP and Salesforce applications via Apex',
      'Optimized high-demand processes using batch jobs, scheduled Apex, and queues',
    ],
    image: '/Assets/Experience/cadelga.png',
  },
  {
    name: 'Escuela DelCampo',
    details: [
      'Built a high school enrollment system within Salesforce',
      'Built a high school platform system for staff inside a Salesforce community site',
      'Built a high school platform system for parents inside a Salesforce community site',
    ],
    image: '/Assets/Experience/delcampo.png',
  },
  {
    name: 'Beaches',
    details: [
      <>Worked directly making changes for <a href="https://beaches.com" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-500 hover:underline">Beaches.com</a></>,
      'Delivered high-priority tasks following a delivery process and the best coding practices',
      'Published and planned releases from development to production environments',
      'Integration of APIs inside the site'
    ],
    image: '/Assets/Experience/beaches.png',
  },
  {
    name: 'Sandals',
    details: [
      <>Worked directly making changes for <a href="https://sandals.com" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-500 hover:underline">Sandals.com</a></>,
      <>Led a team for planning and refactoring of <a href="https://sandals.com/weddings/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-500 hover:underline">Sandals Weddings</a> and all related pages inside the brand</>,
      'Worked on creating experiments with the conversion rate team using AB Tasty and Optimizely',
      'Delivered high-priority tasks following a delivery process and the best coding practices',
      'Published and planned releases from development to production environments',
      'Implemented SEO and accessibility best practices',
      'Integration of APIs inside the site'
    ],
    image: '/Assets/Experience/sandals.png',
  },
  {
    name: 'Experenta',
    details: [
      'Adapted Salesforce to the company\'s daily processes',
      'Integrated multiple external systems into Salesforce, including QuickBooks and SAP',
      'Developed custom apps through Lightning, Apex, and LWC',
      'Migrated information from one system to Salesforce',
      'Configured and set up users and permissions inside Salesforce'
    ],
    image: '/Assets/Experience/experenta.png',
  },
];

const CV = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <section id="cv" className="py-24 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
        {/* Title and Subtitle */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-center mb-4">My Curriculum Vitae</h2>
          <p className="text-center mb-20 text-gray-700">
            Same as the one in my About Me section but more serious
          </p>
        </div>

        <div ref={componentRef} className="bg-white p-6 rounded shadow-2xl">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-3xl font-bold mb-1">Alexy Omar Cruz Aguilera</h1>
            <p className="text-sm font-semibold text-gray-700 mb-2">Computer Systems Engineer | Full Stack Developer / Salesforce Specialist</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 border-t border-b border-gray-300 py-2">
              <p className="text-xs sm:border-r border-gray-300 sm:pr-4 print:text-xs">
                Phone: <a href="tel:+529844505332" className="font-bold text-blue-500 hover:underline">+52 984 450 5332</a>
              </p>
              <p className="text-xs sm:border-r border-gray-300 sm:pr-4 print:text-xs">
                Email: <a href="mailto:alexyocruz1@gmail.com" className="font-bold text-blue-500 hover:underline">alexyocruz1@gmail.com</a>
              </p>
              <p className="text-xs sm:border-r border-gray-300 sm:pr-4 print:text-xs">
                LinkedIn: <a href="https://www.linkedin.com/in/alexy-cruz-72777114b/" className="font-bold text-blue-500 hover:underline">linkedin.com/in/alexy-cruz</a>
              </p>
              <p className="text-xs">
                GitHub: <a href="https://github.com/alexyocruz1" className="font-bold text-blue-500 hover:underline">github.com/alexyocruz1</a>
              </p>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-6 pt-6">
            <div className='mb-4'>
              <p className="text-xs">
                Throughout my career as a Full Stack Developer, I have remained committed to staying up-to-date with the latest industry trends and best practices. I thrive in fast-paced environments, leveraging my adaptability to quickly learn new technologies and incorporate them into my workflow. My experience spans a wide range of technologies, including React, Node.js, and Salesforce, among others. I have a proven track record of delivering dynamic and responsive web applications that meet client needs and exceed expectations.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-lg font-bold mb-2">Skills</h2>
            <div className="space-y-1">
              <div className="flex items-baseline">
                <h3 className="text-sm font-bold mr-2">Coding:</h3>
                <p className="text-xs">React JS, Node JS, JavaScript, TypeScript, Express JS, Java, Next JS, Vue JS, Flutter</p>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-sm font-bold mr-2">CSS:</h3>
                <p className="text-xs">Bootstrap, CSS, SASS, Tailwind CSS</p>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-sm font-bold mr-2">Markup:</h3>
                <p className="text-xs">Freemarker, HTML</p>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-sm font-bold mr-2">DB:</h3>
                <p className="text-xs">Mongo DB</p>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-sm font-bold mr-2">CRM:</h3>
                <p className="text-xs">Salesforce</p>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-sm font-bold mr-2">Version Control:</h3>
                <p className="text-xs">Github, Git</p>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-sm font-bold mr-2">DevOps:</h3>
                <p className="text-xs">Heroku</p>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-sm font-bold mr-2">AB Test:</h3>
                <p className="text-xs">Optimizely, AB Tasty</p>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-sm font-bold mr-2">Languages:</h3>
                <p className="text-xs">Spanish, English</p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-lg font-bold mb-2">Work Experience</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">Full Stack Developer / Salesforce Developer at Experenta</h3>
                <p className="text-xs">April 2019 - Present</p>
              </div>
              <ul className="list-disc list-inside text-xs pl-4">
                <li>Adapted Salesforce to the company’s daily processes</li>
                <li>Integrated multiple external systems into Salesforce, including QuickBooks and SAP</li>
                <li>Developed custom apps through Lightning, Apex, and LWC</li>
                <li>Migrated information from one system to Salesforce</li>
                <li>Configured and set up users and permissions inside Salesforce</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">Frontend Developer at Unique Vacations</h3>
                <p className="text-xs">March 2021 - July 2025</p>
              </div>
              <ul className="list-disc list-inside text-xs pl-4">
                <li>Worked directly on updates for <a href="https://beaches.com" target="_blank" rel="noopener noreferrer" className="font-bold">Beaches.com</a> and <a href="https://sandals.com" target="_blank" rel="noopener noreferrer" className="font-bold">Sandals.com</a></li>
                <li>Delivered high-priority tasks following deployment processes and coding best practices</li>
                <li>Planned and deployed releases from development to production</li>
                <li>Integrated APIs into the site</li>
                <li>Planned and implemented new technology architecture for the main site</li>
                <li>Designed and implemented A/B tests, significantly improving conversion rates in key flows</li>
                <li>Led a team in the planning and refactoring of <a href="https://sandals.com/weddings/" target="_blank" rel="noopener noreferrer" className="font-bold">Sandals Weddings</a> and all related brand pages</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-lg font-bold mb-2">Projects</h2>
            {clients.map((client, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-sm font-bold">{client.name}</h3>
                <ul className="list-disc list-inside text-xs pl-4">
                  {client.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Volunteer Experience */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-lg font-bold mb-2">Volunteer Experience</h2>
            <div className="mb-4">
              <h3 className="text-sm font-bold">Hogar de Amor y Esperanza</h3>
              <p className="text-xs mb-1">2020-2021</p>
              <ul className="list-disc list-inside text-xs pl-4">
                <li>Created a courses and students management website</li>
                <li>Created a donations and campaigns website</li>
              </ul>
            </div>
          </section>

          {/* Academic Activities */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-lg font-bold mb-2">Academic Activities</h2>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">President of the Computer Systems Engineering Program</h3>
                <p className="text-xs">Nov. 2017 - Nov. 2018</p>
              </div>
              <p className="text-xs">UNITEC - International Laureate Universities</p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">President of the IEEE Computer Society Chapter</h3>
                <p className="text-xs">Nov. 2017 - Nov. 2018</p>
              </div>
              <p className="text-xs">UNITEC - International Laureate Universities</p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">Lab Instructor</h3>
                <p className="text-xs">Jun. 2016 - Dec. 2018</p>
              </div>
              <p className="text-xs">UNITEC - International Laureate Universities</p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">Research Department Member</h3>
                <p className="text-xs">Jun. 2016 - Jun. 2017</p>
              </div>
              <p className="text-xs">UNITEC - International Laureate Universities</p>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-lg font-bold mb-2">Education</h2>
            <div className="mb-4">
              <h3 className="text-sm font-bold">Bachelor's in Computer Systems Engineering</h3>
              <p className="text-xs">UNITEC, International Laureate University, June 2014 – December 2020</p>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-6 border-t border-gray-300 pt-6">
            <h2 className="text-lg font-bold mb-2">Certifications</h2>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">Salesforce Certified Administrator</h3>
                <p className="text-xs">December 2020</p>
              </div>
              <p className="text-xs">Salesforce</p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">Salesforce Certified Platform Developer I</h3>
                <p className="text-xs">September 2020</p>
              </div>
              <p className="text-xs">Salesforce</p>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-sm font-bold">Salesforce Certified Platform App Builder</h3>
                <p className="text-xs">June 2020</p>
              </div>
              <p className="text-xs">Salesforce</p>
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