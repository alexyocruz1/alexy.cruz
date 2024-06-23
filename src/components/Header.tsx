// components/Header.tsx
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">Home</a>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a>Experience</a>
              </Link>
            </li>
            <li>
              <Link href="/companies">
                <a>Companies</a>
              </Link>
            </li>
            <li>
              <Link href="/certifications">
                <a>Certifications</a>
              </Link>
            </li>
            <li>
              <Link href="/courses">
                <a>Courses</a>
              </Link>
            </li>
            <li>
              <Link href="/apps">
                <a>Apps</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;