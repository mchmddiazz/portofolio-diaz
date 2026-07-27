"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full bg-black text-white px-6 py-4 flex items-center justify-center">
      <div className="flex items-center gap-4">
        <button onClick={() => setIsOpen(!isOpen)} className="p-1">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <div className="flex items-center gap-4 ml-4">
        <h1 className="text-lg font-bold">Diaz's Portfolio</h1>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="/about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="/project" className="hover:text-cyan-400 transition-colors">
            Project
          </a>
          <a href="/contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}