
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
          <img 
            src="/lovable-uploads/d6ec065a-8ed9-4c33-8b08-b97ca4ed4fb4.png" 
            alt="SkogsKontroll Logo" 
            className="h-8"
          />
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
