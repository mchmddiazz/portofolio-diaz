"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full text-black px-6 py-4 flex items-center justify-between main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="md:hidden sm:flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className="p-1" aria-expanded={isOpen}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div className="flex items-center w-full md:w-auto">
        <h1 className="text-lg font-bold coda-font">〈</h1>
        <h1 className="text-lg font-bold coda-font">/〉</h1>
      </div>
      <div className="md:flex items-center gap-4 ml-auto pr-4 hidden">
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            <span className="link-title">About</span>
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            <span className="link-title">Skills</span>
          </a>
          <a href="#project" className="hover:text-cyan-400 transition-colors">
            <span className="link-title">Project</span>
          </a>
        </nav>
      </div>
        <div className="md:hidden fixed inset-0 sidebar-menu bg-black" aria-expanded={isOpen}>
          {isOpen ? (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <button onClick={() => setIsOpen(!isOpen)} className="p-1" aria-expanded={isOpen}>
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <a href="#about" className="hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                  <span className="link-title">About</span>
                </a>
                <a href="#project" className="hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                  <span className="link-title">Project</span>
                </a>
                <a href="#contact" className="hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(false)}>
                  <span className="link-title">Contact</span>
                </a>
              </nav>
            </div>
          ) : null}
        </div>
    </header>
  );
}