import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <span className="text-white">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="text-white">About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;