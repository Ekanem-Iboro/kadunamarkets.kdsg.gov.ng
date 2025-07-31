import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-bold text-gray-800">My Website</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <p className="text-gray-600 hover:text-gray-800">About</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-gray-600 hover:text-gray-800">Contact</p>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <p className="text-gray-600 hover:text-gray-800">Blog</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
