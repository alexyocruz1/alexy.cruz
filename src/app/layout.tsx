import '../styles/globals.css';
import Navbar from '../components/Navbar';

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  icons: "/Assets/Main/software-developer.ico",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}