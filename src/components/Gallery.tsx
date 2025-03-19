
import { useState } from 'react';
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryItems = [{
    src: "/lovable-uploads/5cae3de7-97e2-46a1-b99b-0432c239e2d0.png",
    title: "Skogsbild - Gallringskarta",
    description: "Detaljerad gallringskarta med information om skogsbeståndet."
  }, {
    src: "/lovable-uploads/d9ac5e10-c711-4bac-9b7a-1b9990a7d5ed.png",
    title: "Skadad skog - Analys",
    description: "Analys av skador i skogsområde med markerade skadeområden."
  }, {
    src: "/lovable-uploads/38cc3287-9e52-470e-8206-4ab78fd1b9e1.png",
    title: "Skogsinventering - Översikt",
    description: "Översiktsbild av skogsområde med detaljerad trädinformation."
  }, {
    src: "/lovable-uploads/eeff33b7-5850-4336-977a-b0beec3b1ed6.png",
    title: "Skogsdata - Analys",
    description: "Datavisualisering av skogsinformation och skogsbruksplan."
  }];

  return (
    <section id="galleri" className="py-24 bg-forest-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-2 text-center">Vårt arbete</h2>
        <p className="text-forest-600 text-center mb-12 max-w-2xl mx-auto">
          Exempel på våra lösningar och analyser för effektiv skogsförvaltning
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative h-64">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-forest-800">{item.title}</h3>
                <p className="text-forest-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-forest-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className={cn(
              "max-w-4xl max-h-[90vh] relative",
              "transform transition-all duration-300",
              selectedImage ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Förstoring" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
