
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 overflow-hidden flex items-center">
      {/* Full-screen forest image background */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/lovable-uploads/146b93a0-0a36-4d24-b7e9-7672ad743313.png" 
          alt="Flygfoto över skog" 
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-forest-900/30"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 drop-shadow-lg">
            Övervaka och planera ditt skogsbruk med drönare
          </h1>
          <p className="text-xl text-white mb-8 max-w-lg drop-shadow-md">
            Med hjälp av modern drönarteknik och AI-analys ger vi dig precisa data för bättre skogsförvaltning och smartare beslut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#kontakt" className="forest-button text-center">Boka Konsultation</a>
            <a href="#tjanster" className="forest-button-secondary text-center bg-white/90 text-forest-800 hover:bg-white">Läs Om Våra Tjänster</a>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative z-10">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute w-[90%] h-auto right-0 rounded-2xl shadow-2xl overflow-hidden animate-drone-float p-4"
              style={{ animationDelay: "0.5s" }}>
              {/* Removed background-color and backdrop-blur from this container div */}
              <img 
                src="/lovable-uploads/519c2dd7-0bae-4f10-8809-83beac948dd2.png" 
                alt="Drönare över skog" 
                className="w-full h-auto rounded"
              />
            </div>
            {/* Removed the bottom/left forest map image */}
          </div>
        </div>
      </div>
      
      {/* Floating drone image */}
      <div 
        className="fixed z-30 w-24 md:w-28 lg:w-32"
        style={{
          top: `${30 + scrollY * 0.05}%`,
          left: `${20 + Math.sin(scrollY * 0.01) * 10}%`,
          transform: `rotate(${scrollY * 0.05}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Removed opacity class to show full transparency */}
        <img 
          src="/lovable-uploads/519c2dd7-0bae-4f10-8809-83beac948dd2.png" 
          alt="Flygande drönare" 
          className="w-full h-auto"
        />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white mb-2 drop-shadow-md">Scroll ner</span>
        <ArrowDown className="w-6 h-6 text-white drop-shadow-md" />
      </div>
    </section>
  );
};

export default Hero;
