
const Services = () => {
  const services = [
    {
      title: "Skogsinventering",
      description: "Dokumentera och analysera skogsbestånd med högupplösta bilder och AI-analys för exakta data.",
      image: "/lovable-uploads/e6ba8e02-e775-4850-b97b-5931e41308d4.png",
      features: [
        "Trädfördelning och skogstyper",
        "Volym och densitet",
        "Trädhöjd och ålder",
        "Trädslag och bestånd"
      ]
    },
    {
      title: "Skadeinventering",
      description: "Identifiera och kartlägg skador i skogsbeståndet för snabba åtgärder.",
      image: "/lovable-uploads/e6ba8e02-e775-4850-b97b-5931e41308d4.png",
      features: [
        "Stormskador och vindfällen",
        "Insektsangrepp",
        "Toppbrott och skadedjur",
        "Sjukdomsdetektering"
      ]
    },
    {
      title: "Gallringskartläggning",
      description: "Exakt kartläggning av gallringsbehov med detaljerad analys av beståndet.",
      image: "/lovable-uploads/e6ba8e02-e775-4850-b97b-5931e41308d4.png",
      features: [
        "Gallringsindex",
        "Individanalys av träd",
        "Täthetsmätningar",
        "Prioriteringsunderlag"
      ]
    },
    {
      title: "Skogsbruksplanering",
      description: "Omfattande underlag för effektiv planering och förvaltning av skogsmark.",
      image: "/lovable-uploads/e6ba8e02-e775-4850-b97b-5931e41308d4.png",
      features: [
        "Uppdaterad skogsbruksplan",
        "Avverkningsunderlag",
        "Skogsvårdsplanering",
        "Naturvårdshänsyn"
      ]
    }
  ];

  return (
    <section id="tjanster" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Våra Tjänster</h2>
          <p className="text-lg text-forest-600 max-w-3xl mx-auto">
            Vi erbjuder omfattande tjänster för modernt och hållbart skogsbruk med hjälp av drönare och AI-analys.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="forest-card overflow-hidden flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-72 overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-6 relative">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700 relative"
                />
                <h2 className="absolute bottom-4 left-4 text-white text-2xl font-serif font-medium drop-shadow-[0_2px_3px_rgba(0,0,0,0.5)] z-20">
                  {service.title}
                </h2>
              </div>
              
              <h3 className="text-xl font-medium text-forest-800 mb-3">{service.title}</h3>
              <p className="text-forest-600 mb-5">{service.description}</p>
              
              <div className="mt-auto">
                <h4 className="font-medium text-forest-700 mb-2">Detta ingår:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-forest-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-forest-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
