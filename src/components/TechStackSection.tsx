'use client';

import { useState, useEffect, useRef } from 'react';

const TechStackSection = () => {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const techStack = [
    // Coding
    { name: 'React JS', src: '/Assets/Stack/React.png' },
    { name: 'Node JS', src: '/Assets/Stack/Nodejs.png' },
    { name: 'JavaScript', src: '/Assets/Stack/JavaScript.png' },
    { name: 'TypeScript', src: '/Assets/Stack/typescript.png' },
    { name: 'Express JS', src: '/Assets/Stack/Expressjs.png' },
    { name: 'Java', src: '/Assets/Stack/java.png' },
    { name: 'Next JS', src: '/Assets/Stack/Nextjs.png' },
    { name: 'Vue JS', src: '/Assets/Stack/Vuejs.png' },
    { name: 'Flutter', src: '/Assets/Stack/flutter.png' },

    // CSS
    { name: 'Bootstrap', src: '/Assets/Stack/bootstrap.png' },
    { name: 'CSS', src: '/Assets/Stack/css.png' },
    { name: 'SASS', src: '/Assets/Stack/sass.png' },
    { name: 'Tailwind CSS', src: '/Assets/Stack/tailwind.png' },
    
    // Markup
    { name: 'Freemarker', src: '/Assets/Stack/freemarker.png' },
    { name: 'HTML', src: '/Assets/Stack/html.png' },
    
    // DB
    { name: 'Mongo DB', src: '/Assets/Stack/MongoDB.png' },
    
    // CRM
    { name: 'Salesforce', src: '/Assets/Stack/salesforce.png' },
    
    // Version Control
    { name: 'Github', src: '/Assets/Stack/github.png' },
    { name: 'Git', src: '/Assets/Stack/git.png' },

    // DevOps
    { name: 'Heroku', src: '/Assets/Stack/heroku.png' },
    { name: 'Vercel', src: '/Assets/Stack/vercel.png' },
    { name: 'Render', src: '/Assets/Stack/render.png' },

    // AB Test
    { name: 'Optimizely', src: '/Assets/Stack/optimizely.png' },
    { name: 'AB Tasty', src: '/Assets/Stack/abtasty.png' },
    // Add more technologies as needed
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
        threshold: 1, // Trigger when 100% of the element is visible
        rootMargin: '0px 0px -25% 0px' // Adjust the root margin to delay the intersection
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
    <section
      id="tech-stack"
      className="py-24 bg-white text-gray-900"
    >
      <div className="container mx-auto px-8 lg:px-16 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">My Stack</h2>
        <p className="text-center mb-20 text-gray-700">
          Here are some of the technologies and tools I use in my projects.
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {techStack.map((tech, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className={`w-32 h-32 flex items-center justify-center mb-8 transition duration-2000 ${visibleIndices.includes(index) ? 'grayscale-0 scale-110' : 'grayscale'} lg:grayscale lg:scale-100 lg:hover:grayscale-0 lg:hover:scale-110`}
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;