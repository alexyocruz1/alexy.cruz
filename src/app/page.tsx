import { NextPage } from 'next';
import { Metadata } from 'next';
import Layout from '../components/Layout';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStackSection';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My personal portfolio website',
};

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <TechStackSection />
    </Layout>
  );
};

export default Home;