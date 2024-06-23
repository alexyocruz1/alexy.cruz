// src/components/ContactForm.tsx
const ContactForm = () => (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-gray-800">Subject</label>
            <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
            <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
          </div>
          <button type="submit" className="bg-soft-blue text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
  
  export default ContactForm;