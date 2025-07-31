const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-500 py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">
                123 Main St.<br />
                Anytown, USA 12345<br />
                Phone: (123) 456-7890<br />
                Email: info@schoolname.edu
              </p>
            </div>
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="list-disc list-inside">
                <li>
                  <a href="#" className="text-gray-500 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-white">
                    Athletics
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/3">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex items-center">
                {/* <a href="#" className="text-gray-500 hover:text-white mr-4">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white mr-4">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-gray-500 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a> */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} School Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  