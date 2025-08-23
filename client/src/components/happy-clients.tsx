import { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const successCases = [
  {
    id: 1,
    title: "Study Permit Approved",
    region: "Ontario",
    date: "Dec 2024",
    note: "Fast-tracked study permit application for computer science program at University of Toronto",
    icon: "study"
  },
  {
    id: 2,
    title: "PR Through Express Entry",
    region: "Alberta",
    date: "Nov 2024",
    note: "Successfully achieved permanent residency with CRS score optimization strategy",
    icon: "pr"
  },
  {
    id: 3,
    title: "LMIA Approved",
    region: "Ontario",
    date: "Oct 2024",
    note: "LMIA approval for skilled technician position, leading to work permit success",
    icon: "lmia"
  },
  {
    id: 4,
    title: "Work Permit Approved",
    region: "British Columbia",
    date: "Sep 2024",
    note: "Open work permit approval for spouse of international student",
    icon: "work"
  },
  {
    id: 5,
    title: "Visitor Visa Success",
    region: "Quebec",
    date: "Aug 2024",
    note: "Multiple-entry visitor visa approved for family reunion purposes",
    icon: "visitor"
  },
  {
    id: 6,
    title: "Study Extension Granted",
    region: "Manitoba",
    date: "Jul 2024",
    note: "Study permit extension approved for master's degree program completion",
    icon: "study"
  }
];

const testimonials = [
  {
    id: 1,
    text: "Transparent process and timely updates throughout our permanent residency application. The team's expertise made a complex process feel manageable and stress-free.",
    author: "A.K.",
    type: "Express Entry Client"
  },
  {
    id: 2,
    text: "Professional guidance from start to finish. My study permit was approved faster than expected, and the communication was excellent throughout.",
    author: "S.P.",
    type: "Study Permit Client"
  },
  {
    id: 3,
    text: "Outstanding service for our LMIA application. They handled all the documentation perfectly and kept us informed at every step of the process.",
    author: "M.R.",
    type: "LMIA Client"
  }
];

export default function HappyClients() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getSuccessIcon = (type: string) => {
    switch (type) {
      case 'study':
        return (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        );
      case 'pr':
        return (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        );
      case 'work':
        return (
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
          </svg>
        );
      default:
        return <CheckCircle className="h-6 w-6 text-white" />;
    }
  };

  const getIconColor = (index: number) => {
    const colors = ['bg-teal', 'bg-royal-blue', 'bg-coral'];
    return colors[index % colors.length];
  };

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-deep-navy mb-4">Happy Clients & Success Stories</h2>
          <p className="text-lg text-gray-600">Real results from our immigration consulting services</p>
        </div>

        {/* Success Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {successCases.map((successCase, index) => (
            <Card key={successCase.id} className="bg-white rounded-custom shadow-soft hover:shadow-soft-lg transition-shadow" data-testid={`success-case-${successCase.id}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${getIconColor(index)} rounded-full flex items-center justify-center mr-4`}>
                      {getSuccessIcon(successCase.icon)}
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg text-deep-navy">{successCase.title}</h3>
                      <p className="text-gray-500 text-sm">{successCase.region} • {successCase.date}</p>
                    </div>
                  </div>
                  <Badge className="bg-teal/10 text-teal px-3 py-1 rounded-full text-sm font-medium">
                    Approved
                  </Badge>
                </div>
                <p className="text-gray-600">{successCase.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Slider */}
        <Card className="bg-white rounded-custom shadow-soft">
          <CardContent className="p-8">
            <h3 className="font-poppins font-bold text-2xl text-deep-navy text-center mb-8">What Our Clients Say</h3>
            
            <div className="relative">
              <div className="max-w-3xl mx-auto text-center" data-testid={`testimonial-${currentTestimonial}`}>
                <blockquote className="text-lg text-gray-600 mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <cite className="font-semibold text-deep-navy">— {testimonials[currentTestimonial].author}</cite>
                <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].type}</p>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                  data-testid="testimonial-prev"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                  data-testid="testimonial-next"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Slider Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-royal-blue' : 'bg-gray-300'
                  }`}
                  data-testid={`testimonial-dot-${index}`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
