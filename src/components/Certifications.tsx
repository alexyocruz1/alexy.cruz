// src/components/Certifications.tsx
const Certifications = () => (
    <section className="bg-soft-green text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Certifications I Have</h2>
        <ul className="mb-6">
          <li className="text-lg font-medium mb-2">Certification Name 1</li>
          <li className="text-lg text-gray-200">Issuing Organization</li>
        </ul>
        <ul>
          <li className="text-lg font-medium mb-2">Certification Name 2</li>
          <li className="text-lg text-gray-200">Issuing Organization</li>
        </ul>
        {/* Add more certifications */}
      </div>
    </section>
  );
  
  export default Certifications;