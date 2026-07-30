"use client";
import { useState } from "react";
export default function Footer() {
  const [isClick, setIsClick] = useState(false);

  return (
    <footer className="w-full text-white py-30 px-30 custom-background border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-col items-center justify-center my-4 gap-4 max-w-6xl m-auto">
        <div className="flex flex-row items-baseline justify-between w-full gap-4">
          <div className="flex flex-col items-center gap-4 mr-auto">
            <div className="footer-title w-full text-left">
              <h2 className="text-lg font-bold uppercase">General</h2>
            </div>
            <nav className="flex flex-col gap-4 text-left w-full">
              <a href="" className="text-white-500 hover:text-white-700 transition-colors" target="_blank" rel="noopener noreferrer">
                About
              </a>
              <a href="https://linkedin.com/in/mochamad-dhias" className="text-white-500 hover:text-white-700 transition-colors" target="_blank" rel="noopener noreferrer">
                Projects
              </a>
            </nav>
          </div>
          <div className="flex flex-col items-center gap-4 mr-auto">
            <div className="footer-title w-full text-left">
              <h2 className="text-lg font-bold uppercase">Say Hello</h2>
            </div>
            <nav className="flex flex-col gap-4 text-left w-full">
              <a href="https://github.com/mchmddiazz" className="text-white-500 hover:text-white-700 transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/mochamad-dhias" className="text-white-500 hover:text-white-700 transition-colors" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:mchmddiazz@gmail.com" className="text-white-500 hover:text-white-700 transition-colors">
                Email
              </a>
              <a href="https://wa.me/6285157065589" className="text-white-500 hover:text-white-700 transition-colors" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </nav>
          </div>
        </div>       
        <div className="text-left mt-4 border-t w-full">
          <p className="text-lg text-white-500 mt-5">
            &copy; {new Date().getFullYear()} Tamdev
          </p>
        </div>
      </div>
    </footer>
  );
}