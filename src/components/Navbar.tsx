import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-20">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="#home">
            <span className="text-white cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <span className="text-white cursor-pointer">About</span>
          </Link>
        </li>
        <li>
          <Link href="#tech-stack">
            <span className="text-white cursor-pointer">Stack</span>
          </Link>
        </li>
        <li>
          <Link href="#certifications">
            <span className="text-white cursor-pointer">Certifications</span>
          </Link>
        </li>
        <li>
          <Link href="#clients">
            <span className="text-white cursor-pointer">Experience</span>
          </Link>
        </li>
        <li>
          <Link href="#personal-applications">
            <span className="text-white cursor-pointer">Personal Applications</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;