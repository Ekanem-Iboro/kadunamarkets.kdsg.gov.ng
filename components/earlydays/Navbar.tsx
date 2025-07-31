const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between h-16">
          <ul className="flex">
            <li className="mr-6">
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-300">Admissions</a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-300">Academics</a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-300">Athletics</a>
            </li>
            <li className="mr-6">
              <a href="#" className="hover:text-gray-300">Events</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact Us</a>
            </li>
          </ul>
          <div className="flex">
            <button className="btn-primary mr-4">Apply Now</button>
            <button className="btn-secondary">Donate</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  