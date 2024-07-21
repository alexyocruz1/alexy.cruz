import { NextPage } from 'next';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'About Me',
  description: 'About me page',
}

const About: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
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