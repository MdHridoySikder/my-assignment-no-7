import React from "react";

const Footer = () => {
  return (
    <footer className=" px-8 bg-black text-white py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-3">CS — Ticket System</h3>
          <p className="text-sm text-neutral-400 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Sales
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <a href="#" className="hover:text-white">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Customer Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Download Apps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Information</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Join Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Social Links</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-x-twitter text-lg"></i> @CS — Ticket
              System
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-linkedin text-lg"></i> @CS — Ticket
              System
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-facebook text-lg"></i> @CS — Ticket
              System
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-lg"></i> support@cst.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 pt-6 border-t border-neutral-800 text-neutral-500 text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
