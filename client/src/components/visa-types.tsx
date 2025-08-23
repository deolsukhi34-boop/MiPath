import { ExternalLink, Mail, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import visaTypesData from "@/data/visa-types.json";

export default function VisaTypes() {
  const getServiceIcon = (serviceType: string) => {
    switch (serviceType) {
      case 'study-permit':
        return (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        );
      case 'work-permit':
        return (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
          </svg>
        );
      case 'permanent-residency':
        return (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        );
      default:
        return (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        );
    }
  };

  const getIconColor = (index: number) => {
    const colors = ['bg-teal', 'bg-royal-blue', 'bg-coral', 'bg-teal'];
    return colors[index % colors.length];
  };

  const getBadgeText = (serviceType: string) => {
    switch (serviceType) {
      case 'study-permit': return 'Popular';
      case 'permanent-residency': return 'Featured';
      default: return null;
    }
  };

  const getBadgeColor = (serviceType: string) => {
    switch (serviceType) {
      case 'study-permit': return 'bg-teal/10 text-teal';
      case 'permanent-residency': return 'bg-coral/10 text-coral';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="visa-types" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-deep-navy mb-4">Visa Types & Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive immigration services tailored to your specific needs and circumstances</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visaTypesData.map((visa, index) => {
            const badgeText = getBadgeText(visa.serviceType);
            return (
              <Card key={visa.id} className="bg-off-white rounded-custom shadow-soft hover:shadow-soft-lg transition-shadow" data-testid={`visa-card-${visa.serviceType}`}>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${getIconColor(index)} rounded-custom flex items-center justify-center mr-4`}>
                        {getServiceIcon(visa.serviceType)}
                      </div>
                      <div>
                        <h3 className="font-poppins font-bold text-xl text-deep-navy">{visa.title}</h3>
                        <p className="text-gray-500 text-sm">{visa.subtitle}</p>
                      </div>
                    </div>
                    {badgeText && (
                      <Badge className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(visa.serviceType)}`}>
                        {badgeText}
                      </Badge>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6">
                    {visa.overview}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-deep-navy mb-2">Key Requirements:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {visa.eligibility.slice(0, 3).map((requirement, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-teal mr-2 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500">Processing Time</p>
                        <p className="font-semibold text-deep-navy">{visa.processingTime}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-sm text-gray-500">Government Fee</p>
                        <p className="font-semibold text-deep-navy">{visa.governmentFees[0]}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=xf4j8SksC06PW3LPZwg76xOtiBTO1TpBtjsvJy32FpVUNks3MVpGSUoyQkM4OTJHSUhCSjU3RzFSNC4u&Token=2e6e78763aaf4dc5b5ae676db2ee6163" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-royal-blue hover:bg-royal-blue/90 text-white text-center py-3 rounded-custom font-medium transition-colors"
                      data-testid={`visa-register-${visa.serviceType}`}
                    >
                      Register
                    </a>
                    <a 
                      href={`mailto:Info@muskanimmigration.com?subject=${encodeURIComponent(visa.title + ' Inquiry - MI Path')}`}
                      className="flex-1 bg-white hover:bg-gray-50 text-deep-navy border border-gray-300 text-center py-3 rounded-custom font-medium transition-colors flex items-center justify-center"
                      data-testid={`visa-email-${visa.serviceType}`}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Ask via Email
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-custom text-lg font-semibold transition-colors shadow-soft-lg"
            data-testid="visa-consultation-button"
          >
            Get Personalized Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
