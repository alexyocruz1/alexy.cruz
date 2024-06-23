// src/components/NavBar.tsx
import Link from 'next/link';

const NavBar = () => (
  <nav className="bg-soft-blue text-white p-4">
    <ul className="flex justify-center space-x-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/experience">Experience</Link></li>
      <li><Link href="/companies">Companies</Link></li>
      <li><Link href="/certifications">Certifications</Link></li>
      <li><Link href="/courses">Courses</Link></li>
      <li><Link href="/projects">Projects</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default NavBar;