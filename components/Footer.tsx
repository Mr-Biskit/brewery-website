// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070D0D] text-white py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">Your Company Name</h2>
            <p className="text-sm">Your Company Slogan or Description</p>
          </div>
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <a href="/" className="text-sm font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm font-semibold">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
