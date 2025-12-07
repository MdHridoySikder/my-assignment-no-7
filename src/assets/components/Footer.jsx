import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-gray-300 py-12 lg:py-16">
        <div className="max-w-11/12 mx-auto px-6 lg:px-8 grid grid-cols-2  lg:grid-cols-5 gap-5">
          {/* Logo + Description */}
          <div className="col-span-2 md:col-span-1 ">
            <h2 className="text-xl font-bold text-white mb-4">
              CS – Ticket System
            </h2>
            <p className="text-sm leading-relaxed text-[#A1A1AA]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company */}
          <div className="ml-8">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-[#A1A1AA]">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Contact Sales</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-[#A1A1AA]">
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Download Apps</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-3 text-sm text-[#A1A1AA]">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                  <span className="text-lg">X</span>
                </div>
                <a href="#" className="text-[#A1A1AA]">
                  @CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center">
                  <span className="text-lg">f</span>
                </div>
                <a href="#" className="text-[#A1A1AA] ">
                  @CS — Ticket System
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-300 rounded-full flex items-center justify-center">
                  <span className="text-lg">M</span>
                </div>
                <a href="mailto:support@cst.com" className="text-[#A1A1AA]">
                  support@cst.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
