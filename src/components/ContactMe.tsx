'use client'; // Ensure this component is treated as a client component

import React, { useState } from 'react';

const ContactMe = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, message }),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setSubject('');
        setMessage('');
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      setStatus('Failed to send email.');
    }
  };

  return (
    <section id="contact-me" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center mb-20 text-gray-700">
          Feel free to reach out to me!
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
          {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;