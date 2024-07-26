'use client'; // Ensure this component is treated as a client component

import { useState, ReactNode } from 'react';
import Modal from './Modal'; // Assuming Modal is in the same directory

type Client = {
  name: string;
  details: ReactNode[]; // Change details to accept ReactNode
  image: string; // Add image property
};

const ClientSection = () => {
  const clients: Client[] = [
    {
      name: 'Beaches',
      details: [
        <>Worked directly making changes for <a href="https://beaches.com" target="_blank" rel="noopener noreferrer" className="font-bold">Beaches.com</a></>,
        'Delivered high-priority tasks following a delivery process and the best coding practices',
        'Publication and planning of releases from development to production environments',
        'Integration of APIs inside the site'
      ],
      image: '/Assets/Experience/beaches.png',
    },
    {
      name: 'Sandals',
      details: [
        <>Worked directly making changes for <a href="https://sandals.com" target="_blank" rel="noopener noreferrer" className="font-bold">Sandals.com site</a></>,
        <>Led a team for planning and refactoring of <a href="https://sandals.com/weddings/" target="_blank" rel="noopener noreferrer" className="font-bold">Sandals Weddings</a> and all related pages inside the brand</>,
        'Worked on creating experiments with the conversion rate team using AB Tasty and Optimizely',
        'Delivered high-priority tasks following a delivery process and the best coding practices',
        'Publication and planning of releases from development to production environments',
        'Implemented SEO and accessibility best practices',
        'Integration of APIs inside the site'
      ],
      image: '/Assets/Experience/sandals.png',
    },
    {
      name: 'Experenta',
      details: [
        'Adapted Salesforce to the company’s daily processes',
        'Integrated multiple external systems into Salesforce, including QuickBooks and SAP',
        'Developed custom apps through Lightning, Apex, and LWC',
        'Migrated information from one system to Salesforce',
        'Configured and set up users and permissions inside Salesforce'
      ],
      image: '/Assets/Experience/experenta.png',
    },
    {
      name: 'Jaremar',
      details: [
        'Optimized high-demand processes using batches, scheduled Apex, and queues',
        'Refactored old code without affecting the company’s processes',
      ],
      image: '/Assets/Experience/jaremar.png',
    },
    {
      name: 'Cadelga',
      details: [
        'Synchronized SAP application and Salesforce through Apex',
        'Optimized high-demand processes using batches, scheduled Apex, and queues',
      ],
      image: '/Assets/Experience/cadelga.png',
    },
    {
      name: 'DelCampo School',
      details: [
        'Built a high school enrollment system inside Salesforce',
        'Built a high school platform system for staff inside a Salesforce community site',
        'Built a high school platform system for parents inside a Salesforce community site',
      ],
      image: '/Assets/Experience/delcampo.png',
    },
  ];

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const openModal = (client: Client) => {
    setSelectedClient(client);
  };

  const closeModal = () => {
    setSelectedClient(null);
  };

  return (
    <section id="clients" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">My Experience</h2>
        <p className="text-center mb-20 text-gray-700">
          Projects I've worked on
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {clients.map((client, index) => (
            <div
              key={index}
              onClick={() => openModal(client)}
              className="w-40 h-40 flex flex-col items-center justify-center text-center cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition duration-300 transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedClient && (
        <Modal onClose={closeModal}>
          <h3 className="text-xl font-bold mb-4">{selectedClient.name}</h3>
          <ul className="list-disc list-inside space-y-2">
            {selectedClient.details.map((detail, index) => (
              <li key={index} className="custom-list-item">{detail}</li>
            ))}
          </ul>
        </Modal>
      )}
    </section>
  );
};

export default ClientSection;