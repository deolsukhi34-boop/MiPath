import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'news', 'visa-types', 'about', 'clients', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MI</span>
                </div>
                <div>
                  <h1 className="font-poppins font-bold text-xl text-deep-navy">MI Path</h1>
                  <p className="text-xs text-gray-500">Powered by Muskan Immigration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'news', label: 'Latest News' },
                { id: 'visa-types', label: 'Visa Types' },
                { id: 'about', label: 'About Us' },
                { id: 'clients', label: 'Happy Clients' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-royal-blue border-b-2 border-royal-blue'
                      : 'text-gray-700 hover:text-royal-blue'
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal hover:bg-teal/90 text-white px-6 py-2 rounded-custom text-sm font-medium transition-colors"
              data-testid="nav-contact-cta"
            >
              Contact / Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-royal-blue p-2"
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            {[
              { id: 'home', label: 'Home' },
              { id: 'news', label: 'Latest News' },
              { id: 'visa-types', label: 'Visa Types' },
              { id: 'about', label: 'About Us' },
              { id: 'clients', label: 'Happy Clients' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block px-3 py-2 text-base font-medium w-full text-left ${
                  activeSection === item.id ? 'text-royal-blue' : 'text-gray-700 hover:text-royal-blue'
                }`}
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal text-white block px-3 py-2 text-base font-medium rounded-custom mx-3 mt-4 text-center w-auto"
              data-testid="mobile-nav-contact"
            >
              Contact / Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
