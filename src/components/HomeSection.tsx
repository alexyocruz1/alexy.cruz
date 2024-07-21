const HomeSection = () => {
    return (
      <section
        id="home"
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Assets/Home/software-developer-4.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg">Hi, I'm Alexy Cruz, a Full Stack Developer.</p>
        </div>
      </section>
    );
  };
  
  export default HomeSection;