import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Latest News", href: "#news" },
    { label: "Visa Types", href: "#visa-types" },
    { label: "About Us", href: "#about" },
    { label: "Contact/Register", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-deep-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MI</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">MI Path</h3>
                <p className="text-gray-300 text-sm">Powered by Muskan Immigration</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">Path to Success</p>
            <p className="text-gray-400 text-sm">Your trusted partner for Canadian immigration services</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-teal transition-colors text-left"
                    data-testid={`footer-link-${link.href.replace('#', '')}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-teal mr-3" />
                <a 
                  href="tel:14168487363" 
                  className="hover:text-teal transition-colors"
                  data-testid="footer-phone"
                >
                  (416) 848-7363
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-teal mr-3" />
                <a 
                  href="mailto:Info@muskanimmigration.com" 
                  className="hover:text-teal transition-colors"
                  data-testid="footer-email"
                >
                  Info@muskanimmigration.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-teal mr-3 mt-1" />
                <span data-testid="footer-address">
                  Unit 2008, Lasalle Boulevard<br />
                  Sudbury, P3A 2A5
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm" data-testid="footer-copyright">
              © 2024 MI Path — Powered by Muskan Immigration. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0" data-testid="footer-disclaimer">
              Information provided is general guidance and not legal advice. Sources credited to IRCC where applicable.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
