
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import ForestButton from './ForestButton';

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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-forest-600">
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-forest-600">
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
        <div className="w-12 h-12">
          <img 
            src="/lovable-uploads/3f25bc0f-c6df-433b-9337-841fca8583ae.png" 
            alt="Drönare" 
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "Ortofoto skapas",
      subtitle: "(Snabborto­foto)",
      points: [],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-forest-600">
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-forest-600">
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
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-12 h-12 text-forest-600">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-14 bg-forest-50/70">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading">Vår Process</h2>
          <p className="text-forest-600 max-w-3xl mx-auto">
            Vi erbjuder en effektiv och transparent process för att ge dig precisa data om din skog.
          </p>
        </div>
        
        {/* Process steps carousel */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-6 hide-scrollbar">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={cn(
                "px-3 py-1.5 rounded-full flex-shrink-0 transition-all text-sm font-medium whitespace-nowrap",
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
        <Card className="max-w-4xl mx-auto border border-forest-100 shadow-sm">
          <CardContent className="p-4">
            <div className="flex gap-4 items-center">
              <div className="bg-forest-100 p-3 rounded-full flex-shrink-0">
                {steps[activeStep].icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-serif text-forest-800">
                  {steps[activeStep].title}
                </h3>
                {steps[activeStep].subtitle && (
                  <p className="text-sm text-forest-600 mt-1">{steps[activeStep].subtitle}</p>
                )}
                
                {steps[activeStep].points.length > 0 && (
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3">
                    {steps[activeStep].points.map((point, index) => (
                      <li key={index} className="flex items-center gap-1.5 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-forest-500 flex-shrink-0"></div>
                        <span className="text-forest-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-4 pt-2 border-t border-forest-100">
              <ForestButton
                variant="secondary"
                size="sm"
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className={cn(
                  "flex items-center gap-1.5",
                  activeStep === 0 && "opacity-50 cursor-not-allowed"
                )}
                disabled={activeStep === 0}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Föregående
              </ForestButton>
              
              <ForestButton
                variant="secondary"
                size="sm"
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                className={cn(
                  "flex items-center gap-1.5",
                  activeStep === steps.length - 1 && "opacity-50 cursor-not-allowed"
                )}
                disabled={activeStep === steps.length - 1}
              >
                Nästa
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </ForestButton>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Process;
