import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>About Me</title>
        <meta name="description" content="About me page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg">
          This is the about me section where you can write about yourself.
        </p>
      </main>
    </div>
  );
};

export default About;