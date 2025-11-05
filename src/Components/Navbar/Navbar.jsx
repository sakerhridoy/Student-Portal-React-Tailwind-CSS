import React, { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import ScrollSpy from 'react-scrollspy-navigation';

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      <ScrollSpy activeClass="nav-active">
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-full md:w-3/4 px-0 md:px-6 py-3 rounded-xl backdrop-blur-md bg-[#12121286] border border-cyan-400 shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee] z-50 flex justify-between items-center">
          <div className="text-cyan-300 text-3xl font-semibold">
            <a href="#home">FDR-2501</a>
          </div>

          {/* Mobile Menu Icon */}
          <BsFillMenuButtonWideFill
            onClick={() => setIsMenu(true)}
            className="text-cyan-300 absolute right-5 text-3xl cursor-pointer md:hidden"
          />

          {/* ✅ Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 md:hidden ${
              isMenu ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={() => setIsMenu(false)}
          ></div>

          {/* ✅ Center Popup Modal */}
          <div
            className={`fixed flex justify-center items-center md:hidden transition-all duration-500 top-0 ${
              isMenu ? 'opacity-100 w-full' : 'w-0 opacity-0'
            }`}
          >
            <div className="bg-[#030831b7] border border-cyan-400 text-white w-full h-screen rounded-2xl py-[200px] shadow-[0_0_15px_#22d3ee] relative flex flex-col items-center gap-6">
              {/* Close Button */}
              <button
                onClick={() => setIsMenu(false)}
                className="absolute top-4 right-5 text-3xl text-cyan-300"
              >
                ✕
              </button>

              <a
                href="#home"
                onClick={() => setIsMenu(false)}
                className="hover:text-cyan-300 transition duration-300 text-3xl font-bold"
              >
                Home
              </a>
              <a
                href="#students"
                onClick={() => setIsMenu(false)}
                className="hover:text-cyan-300 transition duration-300 text-3xl font-bold"
              >
                Students
              </a>
              <a
                href="#portal"
                onClick={() => setIsMenu(false)}
                className="hover:text-cyan-300 transition duration-300 text-3xl font-bold"
              >
                Student Portal
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenu(false)}
                className="hover:text-cyan-300 transition duration-300 text-3xl font-bold"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="menu">
            <ul className="hidden md:flex space-x-6">
              <li>
                <a
                  href="#home"
                  className="text-xl text-white hover:text-cyan-300 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#students"
                  className="text-xl text-white hover:text-cyan-300 transition duration-300"
                >
                  Students
                </a>
              </li>
              <li>
                <a
                  href="#portal"
                  className="text-white text-xl hover:text-cyan-300 transition duration-300"
                >
                  Student Portal
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white text-xl hover:text-cyan-300 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </ScrollSpy>
    </>
  );
}

export default Navbar;
