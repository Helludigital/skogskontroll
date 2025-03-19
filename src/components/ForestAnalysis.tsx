
import React from 'react';

const ForestAnalysis = () => {
  return (
    <section id="analys" className="py-20 bg-forest-50/70">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">AI-analys för Skogsbruk</h2>
          <p className="text-lg text-forest-600 max-w-3xl mx-auto">
            Med hjälp av AI analyserar vi högupplösta bilder av din skog och registrerar detaljer
            och information om varje träd.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="forest-card overflow-hidden p-8">
            <h3 className="text-2xl font-medium text-forest-800 mb-6">Vi använder AI-analys till följande åtgärder:</h3>
            
            <ul className="space-y-4">
              {[
                "Inventering",
                "Röjningskarta (stamantal & trädslagsfördelning)",
                "Gallringskarta",
                "Slutavverkning",
                "Planteringskontroll",
                "Skador (Vindfällen, granbarkborreangrepp, toppbrott)",
                "Skogsbruksplandata",
                "Naturvärdesanalys"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <span className="text-forest-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <img 
                src="/lovable-uploads/95feff30-b178-4a3d-909e-06941f86df2b.png" 
                alt="Skogsskador AI-analys" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <p className="text-forest-600 text-sm mt-2 italic">Exempel på AI-analys som visar skadade områden markerade i rött</p>
            </div>
          </div>
          
          <div className="forest-card overflow-hidden p-8">
            <h3 className="text-2xl font-medium text-forest-800 mb-6">Exempel på information:</h3>
            
            <ul className="space-y-4">
              {[
                "Trädslag artfördelning",
                "Stressade träd",
                "Granbarkborre angripna träd",
                "Stormfällda träd",
                "Virkesvolym",
                "Trädvolym",
                "Trädklasser",
                "Träd antal",
                "Trädhöjder"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-forest-500 flex-shrink-0 mt-2"></div>
                  <span className="text-forest-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <img 
                src="/lovable-uploads/23baee10-bb63-4a2b-b4f6-995c5c2122b1.png" 
                alt="AI-analys exempel med skogsområde" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 forest-card p-8 max-w-4xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-medium text-forest-800 mb-4">Så här jobbar vi</h3>
              <p className="text-forest-600 mb-6">
                Med hjälp av drönare skannar vi din skog på ett effektivt sätt med hög precision. 
                Vi samlar in stora mängder data snabbt och effektivt som hjälper dig i ditt beslutsfattande.
              </p>
              
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-500 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <span className="text-forest-700">Datainsamling med drönare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-500 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <span className="text-forest-700">Skapar högupplöst bildmaterial för import till ditt skogs- eller GIS-system.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-500 text-white flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <span className="text-forest-700">AI-analys för inventering eller skogsbruksplan.</span>
                </li>
              </ol>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/694c6c71-485b-4a6c-a654-7ef0521419ad.png" 
                alt="Karta över skogsområde" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForestAnalysis;
