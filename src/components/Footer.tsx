
const Footer = () => {
  return (
    <footer className="bg-forest-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/b37e6a29-e9d9-461a-b2b6-c5d56b8b447c.png" 
                alt="SkogsKontroll Logo White" 
                className="h-10" 
              />
            </div>
            <p className="text-forest-300">
              Effektiv skogsplanering med hjälp av drönare och AI-analys.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-300 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-forest-300 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-forest-300 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-forest-300 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Tjänster</h3>
            <ul className="space-y-2">
              <li><a href="#tjanster" className="text-forest-300 hover:text-white transition-colors">Skogsinventering</a></li>
              <li><a href="#tjanster" className="text-forest-300 hover:text-white transition-colors">Skadeinventering</a></li>
              <li><a href="#tjanster" className="text-forest-300 hover:text-white transition-colors">Gallringskartläggning</a></li>
              <li><a href="#tjanster" className="text-forest-300 hover:text-white transition-colors">Skogsbruksplanering</a></li>
              <li><a href="#tjanster" className="text-forest-300 hover:text-white transition-colors">AI-analys</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-forest-300 hover:text-white transition-colors">Hem</a></li>
              <li><a href="#tjanster" className="text-forest-300 hover:text-white transition-colors">Tjänster</a></li>
              <li><a href="#process" className="text-forest-300 hover:text-white transition-colors">Process</a></li>
              <li><a href="#analys" className="text-forest-300 hover:text-white transition-colors">AI-analys</a></li>
              <li><a href="#kontakt" className="text-forest-300 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-forest-300 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-forest-300">070 297 12 07</span>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-forest-300 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-forest-300">info@skogskontroll.se</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-forest-700 text-center text-forest-400">
          <p>© {new Date().getFullYear()} SkogsKontroll. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
