const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900"
    >
      <div className="container mx-auto px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Information Column */}
          <div className="px-4 md:px-8">
            <h1 className="text-4xl font-bold text-center md:text-left">About Me</h1>
            <p className="mt-4 text-lg text-center md:text-left">
              Hi, I’m Alexy Cruz, a Full Stack Developer. I am passionate about learning new things and using new tools to create dynamic web applications. I have experience in various technologies including React, Node.js, and more. My hobbies include movies, series, traveling, and anything related to cinema. I have been working as a developer since 2016, starting during my college years.
            </p>
            <div className="mt-6 text-center md:text-left">
              <p className="text-lg font-semibold">Email: <a href="mailto:alexyocruz1@gmail.com" className="text-blue-500">alexyocruz1@gmail.com</a></p>
              <p className="text-lg font-semibold mt-2">Phone: <a href="tel:+529844505332" className="text-blue-500">+52 984 450 5332</a></p>
              <p className="text-lg font-semibold mt-2">Address: <span className="text-blue-500">Playa del Carmen, Quintana Roo, Mexico</span></p>
            </div>
            <div className="mt-6 text-center md:text-left">
              <a
                href="/Assets/About/CV_AlexyCruz_English.pdf"
                download
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                GET MY CV
              </a>
              <p className="mt-2 italic text-gray-600">
                This is the same CV you’ll get later in this portfolio but with more style.
              </p>
            </div>
          </div>
          {/* Photo Column */}
          <div className="flex justify-center md:justify-end px-4 md:px-8">
            <img
              src="Assets/About/portrait.jpg"
              alt="Alexy Cruz"
              className="w-40 h-40 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;