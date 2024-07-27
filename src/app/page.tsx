import { NextPage } from 'next';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import TechStackSection from '@/components/TechStackSection';
import CertificationsSection from '@/components/CertificationsSection';
import ClientSection from '@/components/ClientSection';
import PersonalApplications from '@/components/PersonalApplications';
import ContactMe from '@/components/ContactMe';
import CV from '@/components/CV';

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
      <PersonalApplications />
      <CV />
      <ContactMe />
    </Layout>
  );
};

export default Home;