// src/components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., send email)
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject</label>
          <input type="text" id="subject" name="subject" className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;