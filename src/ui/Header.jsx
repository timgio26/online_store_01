import { Link } from "react-router-dom";
export function Header() {
  return (
    <nav className="bg-primary-500 p-4 flex items-center justify-between h-12">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Shop Logo"
          className="h-10 w-10 mr-3"
        />
        <span className="text-white text-2xl font-bold">Shop Name</span>{" "}
      </div>{" "}
      <ul className="flex space-x-4 text-white">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <a href="/products" className="hover:text-gray-300">
            Products
          </a>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
