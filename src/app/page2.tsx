import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/Assets/Main/software-developer.ico" />
      </Head>

      <nav className="bg-gray-800 p-4 fixed w-full z-10">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link href="#home">
              <a className="text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a className="text-white">About</a>
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4 text-lg">Hi, I'm [Your Name], a [Your Profession].</p>
          </div>
        </section>

        <section id="about" className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="mt-4 text-lg">This is the about me section where you can write about yourself.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;