import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white shadow-sm px-4 lg:px-5">
        {/* Left Side - Logo */}
        <div className="navbar-start ">
          <a className="hover:bg-gray-300 text-xl font-bold p-2 rounded-xl">
            CS – Ticket System
          </a>
        </div>

        {/* Center - Menu (Desktop only) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <a className="hover:bg-gray-300">Home</a>
            </li>
            <li>
              <a className="hover:bg-gray-300">FAQ</a>
            </li>
            <li>
              <a className="hover:bg-gray-300">Changelog</a>
            </li>
            <li>
              <a className="hover:bg-gray-300">Blog</a>
            </li>
            <li>
              <a className="hover:bg-gray-300">Download</a>
            </li>
            <li>
              <a className="hover:bg-gray-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* menu 3 line mutton + mobile menu */}
        <div className=" flex items-center gap-3">
          {/* + New Ticket Button */}
          <a className="btn btn-primary bg-purple-600 hover:bg-purple-800 border-none text-white rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            New Ticket
          </a>

          {/* menu 3 line mutton + mobile menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 right-0"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
