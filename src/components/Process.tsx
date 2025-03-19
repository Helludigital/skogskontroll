
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

const Process = () => {
  // Mock the motion component since we don't have framer-motion installed
  const motion = {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>
  };

  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Beställning drönareflygning för:",
      points: [
        "Inventering",
        "Skogsbruksplandata",
        "Skadeinventering",
        "Avverkningsuppföljning",
        "Planteringsuppföljning"
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-forest-600">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      title: "Uppdragsplanering:",
      points: [
        "Datum/tid",
        "Flygrutt",
        "Flyginformation",
        "Uppladdning av Forestand-fil"
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-forest-600">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      title: "Flygning",
      points: [],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-forest-600">
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      )
    },
    {
      title: "Ortofoto skapas",
      subtitle: "(Snabborto­foto)",
      points: [],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-forest-600">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
      )
    },
    {
      title: "Bildanalys med AI",
      points: [],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-forest-600">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
          <line x1="7" y1="2" x2="7" y2="22"></line>
          <line x1="17" y1="2" x2="17" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="2" y1="7" x2="7" y2="7"></line>
          <line x1="2" y1="17" x2="7" y2="17"></line>
          <line x1="17" y1="17" x2="22" y2="17"></line>
          <line x1="17" y1="7" x2="22" y2="7"></line>
        </svg>
      )
    },
    {
      title: "Underlag skapas till skoglig applikation eller GIS-system",
      subtitle: "(Forestand, GeoJSON, GPKG, MOSAIC)",
      points: [],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-16 h-16 text-forest-600">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-20 bg-forest-50/70">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Vår Process</h2>
          <p className="text-lg text-forest-600 max-w-3xl mx-auto">
            Vi erbjuder en effektiv och transparent process för att ge dig precisa data om din skog.
            Från beställning till slutrapport, följ varje steg i processen.
          </p>
        </div>
        
        {/* Process steps navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={cn(
                "px-4 py-2 rounded-full transition-all text-sm font-medium",
                activeStep === index
                  ? "bg-forest-500 text-white shadow-md"
                  : "bg-white text-forest-700 hover:bg-forest-100 border border-forest-200"
              )}
            >
              Steg {index + 1}
            </button>
          ))}
        </div>
        
        {/* Process detail */}
        <div className="forest-card p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-forest-100 p-6 rounded-full">
                {steps[activeStep].icon}
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif text-forest-800 mb-2">
                {steps[activeStep].title}
              </h3>
              {steps[activeStep].subtitle && (
                <p className="text-forest-600 mb-4">{steps[activeStep].subtitle}</p>
              )}
              
              {steps[activeStep].points.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {steps[activeStep].points.map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-forest-500"></div>
                      <span className="text-forest-700">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium",
                activeStep === 0
                  ? "opacity-50 cursor-not-allowed bg-forest-100 text-forest-600"
                  : "bg-white text-forest-700 hover:bg-forest-100 border border-forest-200"
              )}
              disabled={activeStep === 0}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              Föregående
            </button>
            
            <button
              onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium",
                activeStep === steps.length - 1
                  ? "opacity-50 cursor-not-allowed bg-forest-100 text-forest-600"
                  : "bg-white text-forest-700 hover:bg-forest-100 border border-forest-200"
              )}
              disabled={activeStep === steps.length - 1}
            >
              Nästa
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
