
const Contact = () => {
  return (
    <section id="kontakt" className="py-20 bg-forest-50/70">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Kontakta Oss</h2>
          <p className="text-lg text-forest-600 max-w-3xl mx-auto">
            Vill du veta mer om våra tjänster? 
            Kontakta oss så återkommer vi så snart som möjligt.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="forest-card">
            <h3 className="text-2xl font-medium text-forest-800 mb-6">Kontaktinformation</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-forest-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div>
                  <h4 className="font-medium text-forest-700">Telefon</h4>
                  <p className="text-forest-600">070 297 12 07</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-forest-500 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div>
                  <h4 className="font-medium text-forest-700">E-post</h4>
                  <p className="text-forest-600">skogskontroll@icloud.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
