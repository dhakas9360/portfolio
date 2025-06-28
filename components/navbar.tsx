"use client";

import { useState, useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-150 border-b border-gray-800 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="font-bold text-xl tracking-tighter">
              Ankit  
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1tL8Xyxe3PxaGeQkjzocyOWbhaLuEFzYx/view?usp=drive_link"
              target="_blank"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-500 transition-colors"
            >
              Resume
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (el) {
                      setIsMobileMenuOpen(false); // Close menu first
                      // Delay scroll a bit to allow layout to settle
                      setTimeout(() => {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100); // tweak as needed based on animation duration
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1tL8Xyxe3PxaGeQkjzocyOWbhaLuEFzYx/view?usp=drive_link"
                target="_blank"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
