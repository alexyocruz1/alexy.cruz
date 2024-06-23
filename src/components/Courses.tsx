// src/components/Courses.tsx
const Courses = () => (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Courses I Have Completed</h2>
        <ul className="mb-6">
          <li className="text-lg font-medium mb-2">Course Name 1</li>
          <li className="text-lg text-gray-700">Platform Name</li>
        </ul>
        <ul>
          <li className="text-lg font-medium mb-2">Course Name 2</li>
          <li className="text-lg text-gray-700">Platform Name</li>
        </ul>
        {/* Add more courses */}
      </div>
    </section>
  );
  
  export default Courses;