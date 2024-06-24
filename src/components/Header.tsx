// src/components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-soft-blue text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold">Home</Link>
        <Link href="/about" className="font-bold">About</Link>
        <Link href="/experience" className="font-bold">Experience</Link>
        <Link href="/companies" className="font-bold">Companies</Link>
        <Link href="/certifications" className="font-bold">Certifications</Link>
        <Link href="/courses" className="font-bold">Courses</Link>
        <Link href="/projects" className="font-bold">Projects</Link>
        <Link href="/contact" className="font-bold">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;