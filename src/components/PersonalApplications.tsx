'use client'; // Ensure this component is treated as a client component

import { useState, useEffect, useRef } from 'react';

const PersonalAppsSection = () => {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const imageRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const applications = [
    {
      name: 'Simple Chat',
      src: '/Assets/Apps/chat-logo.png',
      documentation: 'https://github.com/alexyocruz1/chat-app-client#readme',
      demo: 'https://alexyocruz1.github.io/chat-app-client',
    },
    {
      name: 'Endpoint Scheduler',
      src: '/Assets/Apps/time-management.png',
      documentation: 'https://github.com/alexyocruz1/endpoint-scheduler-client#readme',
      demo: 'https://endpoint-scheduler-client.vercel.app/',
    },
    {
      name: 'Survey App',
      src: '/Assets/Apps/checklist.png',
      documentation: 'https://github.com/alexyocruz1/survey-app#readme',
      demo: 'https://survey-cpwcfyp1b-alexy-cruzs-projects.vercel.app/',
    },
    // Add more applications as needed
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleIndices((prevIndices) => [...prevIndices, index]);
          } else {
            setVisibleIndices((prevIndices) => prevIndices.filter((i) => i !== index));
          }
        });
      },
      {
        threshold: 0.5, // Adjusted threshold to 0.5 for more visibility before triggering
        rootMargin: '0px 0px -35% 0px', // Adjust the root margin to delay the intersection
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="personal-apps" className="py-24 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">Personal Projects</h2>
        <p className="text-center mb-20 text-gray-700">
          Projects I've built
        </p>
        <div className="flex flex-wrap justify-center gap-20">
          {applications.map((app, index) => (
            <a
              key={index}
              data-index={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              href={app.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-40 h-40 flex flex-col items-center justify-center mb-8 text-center transition duration-2000 ${visibleIndices.includes(index) ? 'grayscale-0 scale-110' : 'grayscale'} lg:grayscale lg:scale-100 lg:hover:grayscale-0 lg:hover:scale-110`}
            >
              <img
                src={app.src}
                alt={app.name}
                className="w-full h-full object-contain"
              />
              <span className="mt-2 text-sm text-gray-700">{app.name}</span>
              <div className="mt-2 text-sm text-gray-700 font-bold">
                <a href={app.documentation} target="_blank" rel="noopener noreferrer" className="hover:underline">Documentation</a> | <a href={app.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">Demo</a>
              </div>
            </a>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center mt-16">More to come!</h2>
      </div>
    </section>
  );
};

export default PersonalAppsSection;