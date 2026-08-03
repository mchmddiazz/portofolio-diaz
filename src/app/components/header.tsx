"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRightIcon } from "lucide-react";

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
        <a href="/" className="text-xl font-bold">
          <div className="flex items-center w-full md:w-auto">
              <h1 className="text-lg font-bold coda-font">〈&nbsp;TamDev</h1>
              <h1 className="text-lg font-bold coda-font"> &nbsp;/〉</h1>
          </div>
        </a>
      <div className="md:flex items-center gap-4 ml-auto pr-4 hidden">
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="/" className="hover:text-grey-600 transition-colors">
            <span className="link-title">About</span>
          </a>
          <a href="/experience" className="hover:text-grey-600 transition-colors">
            <span className="link-title">Experience</span>
          </a>
          <a href="/projects" className="hover:text-grey-600 transition-colors">
            <span className="link-title">Projects</span>
          </a>
          <a href="/resume/Resume-Mochamad-Dhias.pdf" className="hover:text-grey-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <span className="link-title">My Resume</span>
          </a>
        </nav>
      </div>
        <div className="md:hidden fixed inset-0 sidebar-menu bg-[#171c28] h-fit top-[60px]" aria-expanded={isOpen}>
          {isOpen ? (
            <div className="p-6 nav-mobile">
              <nav className="flex flex-col gap-4">
                <a href="/" className="flex items-center justify-between text-white transition-colors" onClick={() => setIsOpen(false)}>
                  <span className="link-title">About</span> <ChevronRightIcon />
                </a>
                <a href="/projects" className="flex items-center justify-between text-white transition-colors" onClick={() => setIsOpen(false)}>
                  <span className="link-title">Projects</span> <ChevronRightIcon />
                </a>
                <a href="/experience" className="flex items-center justify-between text-white transition-colors" onClick={() => setIsOpen(false)}>
                  <span className="link-title">Experience</span> <ChevronRightIcon />
                </a>
                <a href="/resume/Resume-Mochamad-Dhias.pdf" className="flex items-center justify-between text-white transition-colors" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">
                  <span className="link-title">My Resume</span> <ChevronRightIcon />
                </a>
              </nav>
            </div>
          ) : null}
        </div>
    </header>
  );
}