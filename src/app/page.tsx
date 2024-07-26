import { NextPage } from 'next';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import CertificationsSection from '@/components/CertificationsSection';
import ClientSection from '@/components/ClientSection';

export const metadata: Metadata = {
  title: 'Alexy Cruz | My Portfolio',
  description: 'My personal portfolio website',
};

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeSection />
      <AboutSection />
      <TechStackSection />
      <CertificationsSection />
      <ClientSection />
    </Layout>
  );
};

export default Home;