
import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-white font-heading font-bold text-xl md:text-2xl">
          Ernest Lino
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="text-white hover:text-lino-yellow transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-lino-yellow transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-white hover:text-lino-yellow transition-colors"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#performance"
                className="text-white hover:text-lino-yellow transition-colors"
              >
                Performance
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-white hover:text-lino-yellow transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-lino-yellow transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <button className="bg-lino-yellow text-black py-2 px-5 rounded-md font-bold hover:bg-lino-yellow-light transition duration-300 flex items-center">
            START NOW
            <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {mobileMenuOpen ? (
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
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 shadow-xl"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container py-6">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="block text-white hover:text-lino-yellow transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-white hover:text-lino-yellow transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="block text-white hover:text-lino-yellow transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#performance"
                className="block text-white hover:text-lino-yellow transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Performance
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block text-white hover:text-lino-yellow transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-white hover:text-lino-yellow transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="pt-4">
              <button className="w-full bg-lino-yellow text-black py-3 px-5 rounded-md font-bold hover:bg-lino-yellow-light transition duration-300 flex items-center justify-center">
                START NOW
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
