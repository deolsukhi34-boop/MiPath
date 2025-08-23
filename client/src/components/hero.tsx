export default function Hero() {
  return (
    <section id="home" className="relative hero-bg min-h-screen flex items-center">
      {/* Canadian landscape background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Canadian landscape with mountains and lake" 
          className="w-full h-full object-cover" 
          loading="lazy"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Experienced Immigration Consultant & Visa Firm in Sudbury
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Your trusted partner for Study Permits, Work Permits, Permanent Residency, LMIA, Visitor Visas, and Super Visas. 
            <span className="text-teal font-medium">Path to Success</span> starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=xf4j8SksC06PW3LPZwg76xOtiBTO1TpBtjsvJy32FpVUNks3MVpGSUoyQkM4OTJHSUhCSjU3RzFSNC4u&Token=2e6e78763aaf4dc5b5ae676db2ee6163" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-custom text-lg font-semibold transition-colors shadow-soft-lg"
              data-testid="hero-register-button"
            >
              Register Now
            </a>
            <a 
              href="https://www.muskanimmigration.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-custom text-lg font-semibold transition-colors"
              data-testid="hero-website-button"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
