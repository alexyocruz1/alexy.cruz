import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">
          Hi, I'm [Your Name], a [Your Profession].
        </p>
      </main>
    </div>
  );
};

export default Home;