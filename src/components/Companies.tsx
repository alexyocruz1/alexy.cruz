// src/components/Companies.tsx
const Companies = () => (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Companies I Have Worked With</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li className="text-lg text-gray-700">Company A</li>
          <li className="text-lg text-gray-700">Company B</li>
          <li className="text-lg text-gray-700">Company C</li>
          {/* Add more companies */}
        </ul>
      </div>
    </section>
  );
  
  export default Companies;