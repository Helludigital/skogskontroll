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
  return <section id="inventering" className="py-20 bg-forest-50">
      
      
      {/* Image Modal */}
      {selectedImage && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white hover:text-forest-200 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <img src={selectedImage} alt="Enlarged view" className="w-full rounded-lg shadow-2xl" />
          </div>
        </div>}
    </section>;
};
export default Gallery;