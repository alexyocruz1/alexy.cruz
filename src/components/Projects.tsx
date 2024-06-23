// src/components/Projects.tsx
const Projects = () => (
    <section className="bg-soft-blue text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Apps I Have Developed</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li className="text-lg text-gray-200">Project Name 1</li>
          <li className="text-lg text-gray-200">Project Name 2</li>
          {/* Add more projects */}
        </ul>
      </div>
    </section>
  );
  
  export default Projects;