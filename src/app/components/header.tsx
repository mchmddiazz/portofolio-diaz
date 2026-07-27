"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full text-white px-6 py-4 flex items-center justify-center">
      <div className="hidden sm:flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className="p-1">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div className="flex items-center gap-4 ml-4">
        <h1 className="text-lg font-bold">Diaz's Portfolio</h1>
      </div>
      <div className="flex items-center gap-4 ml-auto pr-4">
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="/about" className="hover:text-cyan-400 transition-colors">
            <span className="link-title">About</span>
          </a>
          <a href="/project" className="hover:text-cyan-400 transition-colors">
            <span className="link-title">Project</span>
          </a>
          <a href="/contact" className="hover:text-cyan-400 transition-colors">
            <span className="link-title">Contact</span>
          </a>
        </nav>
      </div>
    </header>
  );
}