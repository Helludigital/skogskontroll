
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 text-forest-700" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="12 2 22 12 12 22 2 12 12 2" />
            <line x1="12" y1="22" x2="12" y2="15" />
            <line x1="12" y1="2" x2="12" y2="9" />
            <line x1="2" y1="12" x2="9" y2="12" />
            <line x1="22" y1="12" x2="15" y2="12" />
          </svg>
          <span className="text-xl font-semibold tracking-tight text-forest-800 font-serif">SkogsKontroll</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#tjanster" className="text-forest-700 hover:text-forest-600 transition-colors font-medium">Tjänster</a>
          <a href="#process" className="text-forest-700 hover:text-forest-600 transition-colors font-medium">Process</a>
          <a href="#analys" className="text-forest-700 hover:text-forest-600 transition-colors font-medium">AI-analys</a>
          <a href="#inventering" className="text-forest-700 hover:text-forest-600 transition-colors font-medium">Inventering</a>
          <a href="#kontakt" className="text-forest-700 hover:text-forest-600 transition-colors font-medium">Kontakt</a>
          <a href="#kontakt" className="forest-button">Boka Demo</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-forest-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a href="#tjanster" className="text-forest-700 py-2 px-4 hover:bg-forest-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Tjänster</a>
            <a href="#process" className="text-forest-700 py-2 px-4 hover:bg-forest-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Process</a>
            <a href="#analys" className="text-forest-700 py-2 px-4 hover:bg-forest-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>AI-analys</a>
            <a href="#inventering" className="text-forest-700 py-2 px-4 hover:bg-forest-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Inventering</a>
            <a href="#kontakt" className="text-forest-700 py-2 px-4 hover:bg-forest-50 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
            <a href="#kontakt" className="forest-button mx-4 text-center" onClick={() => setIsMenuOpen(false)}>Boka Demo</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
