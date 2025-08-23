import { CheckCircle, Shield, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  const values = [
    {
      icon: CheckCircle,
      title: "Clarity",
      description: "Clear communication at every step",
      color: "bg-teal/10 text-teal"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest and ethical practices",
      color: "bg-royal-blue/10 text-royal-blue"
    },
    {
      icon: Clock,
      title: "Timely Execution",
      description: "Meeting deadlines consistently",
      color: "bg-coral/10 text-coral"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-deep-navy mb-6">About Muskan Immigration</h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                We are a dedicated immigration consulting firm based in Sudbury, committed to helping individuals 
                and families achieve their Canadian immigration goals through professional, ethical, and personalized service.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="text-center" data-testid={`value-${index}`}>
                      <div className={`w-16 h-16 ${value.color.split(' ')[0]} rounded-custom flex items-center justify-center mx-auto mb-3`}>
                        <IconComponent className={`h-8 w-8 ${value.color.split(' ')[1]}`} />
                      </div>
                      <h3 className="font-poppins font-semibold text-deep-navy mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Card className="bg-off-white rounded-custom shadow-soft">
            <CardContent className="p-8">
              <h3 className="font-poppins font-bold text-xl text-deep-navy mb-6">Director's Message</h3>
              
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-deep-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">IJ</span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-deep-navy">Itwant Singh Johal</h4>
                  <p className="text-gray-500">Director & Immigration Consultant</p>
                </div>
              </div>

              <blockquote className="text-gray-600 mb-6">
                "With years of experience in Canadian immigration law and a deep understanding of the challenges 
                faced by newcomers, I am committed to providing personalized solutions that turn your Canadian 
                dreams into reality. Every client's success is our success."
              </blockquote>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-deep-navy mb-4">Office Information</h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center" data-testid="office-address">
                    <MapPin className="h-5 w-5 text-teal mr-3" />
                    Unit 2008, Lasalle Boulevard, Sudbury, P3A 2A5
                  </div>
                  <div className="flex items-center" data-testid="office-hours">
                    <Clock className="h-5 w-5 text-teal mr-3" />
                    Office Hours: Monday–Friday 09:00–18:00
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
