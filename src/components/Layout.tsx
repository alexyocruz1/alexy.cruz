import { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="pt-10"> {/* Add padding to the top to account for the navbar height */}
        {children}
      </main>
    </div>
  );
};

export default Layout;