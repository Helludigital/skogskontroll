
import { useState } from 'react';
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryItems = [
    {
      src: "/lovable-uploads/5cae3de7-97e2-46a1-b99b-0432c239e2d0.png",
      title: "Skogsbild - Gallringskarta",
      description: "Detaljerad gallringskarta med information om skogsbeståndet."
    },
    {
      src: "/lovable-uploads/d9ac5e10-c711-4bac-9b7a-1b9990a7d5ed.png",
      title: "Skadad skog - Analys",
      description: "Analys av skador i skogsområde med markerade skadeområden."
    },
    {
      src: "/lovable-uploads/38cc3287-9e52-470e-8206-4ab78fd1b9e1.png",
      title: "Skogsinventering - Översikt",
      description: "Översiktsbild av skogsområde med detaljerad trädinformation."
    },
    {
      src: "/lovable-uploads/eeff33b7-5850-4336-977a-b0beec3b1ed6.png",
      title: "Skogsdata - Analys",
      description: "Datavisualisering av skogsinformation och skogsbruksplan."
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Galleri</h2>
          <p className="text-lg text-forest-600 max-w-3xl mx-auto">
            Se exempel på våra analyser och visualiseringar av skogsdata.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="forest-card p-0 overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-forest-800 mb-1">{item.title}</h3>
                <p className="text-sm text-forest-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-forest-200 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
