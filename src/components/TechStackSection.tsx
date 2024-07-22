'use client';

const TechStackSection = () => {
  const techStack = [
    // Coding
    { name: 'React JS', src: '/Assets/Stack/React.png' },
    { name: 'Node JS', src: '/Assets/Stack/Nodejs.png' },
    { name: 'JavaScript', src: '/Assets/Stack/JavaScript.png' },
    { name: 'Express JS', src: '/Assets/Stack/Expressjs.png' },
    { name: 'Java', src: '/Assets/Stack/java.png' },
    { name: 'Next JS', src: '/Assets/Stack/nextjs.png' },
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
    // Add more technologies as needed
  ];

  return (
    <section
      id="tech-stack"
      className="py-8 bg-white text-gray-900"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">My Stack</h2>
        <p className="text-center mb-8 text-gray-700">
          Here are some of the technologies and tools I use in my projects.
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {techStack.map((tech, index) => (
            <div key={index} className="w-32 h-32 flex items-center justify-center mb-8">
              <img
                src={tech.src}
                alt={tech.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition duration-300 transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;