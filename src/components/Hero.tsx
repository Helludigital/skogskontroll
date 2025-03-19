
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-50 to-forest-100 -z-10"></div>
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="forest-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="currentColor" className="text-forest-900" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#forest-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-forest-800 mb-6">
            Övervaka och planera ditt skogsbruk med drönare
          </h1>
          <p className="text-xl text-forest-600 mb-8 max-w-lg">
            Med hjälp av modern drönarteknik och AI-analys ger vi dig precisa data för bättre skogsförvaltning och smartare beslut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#kontakt" className="forest-button text-center">Boka Konsultation</a>
            <a href="#tjanster" className="forest-button-secondary text-center">Läs Om Våra Tjänster</a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative z-10">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <img 
              src="/lovable-uploads/d768552c-d511-45b6-ae73-3813d63dbb64.png" 
              alt="Drönare över skog" 
              className="absolute w-[90%] h-auto right-0 rounded-2xl shadow-2xl object-cover animate-drone-float"
              style={{ animationDelay: "0.5s" }}
            />
            <img 
              src="/lovable-uploads/694c6c71-485b-4a6c-a654-7ef0521419ad.png" 
              alt="Skogskarta" 
              className="absolute w-[70%] h-auto left-0 bottom-0 rounded-2xl shadow-2xl object-cover animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-forest-600 mb-2">Scroll ner</span>
        <ArrowDown className="w-6 h-6 text-forest-500" />
      </div>
    </section>
  );
};

export default Hero;
