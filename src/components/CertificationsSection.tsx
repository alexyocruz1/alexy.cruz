'use client'; // Ensure this component is treated as a client component

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'Salesforce Administrator',
      src: '/Assets/Certifications/salesforce-admin.png',
      link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=uL88YRc3iV2fjjM1vBcMophvLQc1XiP2PX1k0cuSjvs59rjzAeZTlVlkyijRamHr',
    },
    {
      name: 'Salesforce Platform Developer I',
      src: '/Assets/Certifications/salesforce-platform-1.png',
      link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=uL88YRc3iV2fjjM1vBcMophvLQc1XiP2PX1k0cuSjvs59rjzAeZTlVlkyijRamHr',
    },
    {
      name: 'Salesforce Platform App Builder',
      src: '/Assets/Certifications/platform-app-builder.png',
      link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=uL88YRc3iV2fjjM1vBcMophvLQc1XiP2PX1k0cuSjvs59rjzAeZTlVlkyijRamHr',
    },
    {
      name: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
      src: '/Assets/Certifications/udemy.png',
      link: 'https://www.udemy.com/certificate/UC-f647ab8b-10fd-401d-9d2d-9c853387672a/',
    },
    {
      name: 'Understanding TypeScript',
      src: '/Assets/Certifications/udemy.png',
      link: 'https://www.udemy.com/certificate/UC-bfe1360b-8b9d-4744-bcfb-c41b5ccf61ec/',
    },
    {
      name: 'Understanding HTML and CSS',
      src: '/Assets/Certifications/udemy.png',
      link: 'https://www.udemy.com/certificate/UC-adf50066-f833-44ce-b3bb-a539e5f906f9/',
    },
    {
      name: 'SASS - The Complete SASS Course (CSS Preprocessor)',
      src: '/Assets/Certifications/udemy.png',
      link: 'https://www.udemy.com/certificate/UC-5a21ef77-2238-4b14-8393-83a2051872a9/',
    },
    {
      name: 'The Complete JavaScript Course 2023: From Zero to Expert!',
      src: '/Assets/Certifications/udemy.png',
      link: 'https://www.udemy.com/certificate/UC-71fc3d5d-ec45-497b-bd3b-257371f62742/',
    },
    // Add more certifications as needed
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-gray-100 text-gray-900"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">My Certifications</h2>
        <p className="text-center mb-20 text-gray-700">
          Things I've learned on my way 
        </p>
        <div className="flex flex-wrap justify-center gap-28">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-40 flex flex-col items-center justify-center mb-8 text-center"
            >
              <img
                src={cert.src}
                alt={cert.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition duration-300 transform hover:scale-110"
              />
              <span className="mt-2 text-sm text-gray-700">{cert.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;