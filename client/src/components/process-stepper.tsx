import { CheckCircle, Clock, FileText, Calendar, Users, FileSignature, Send } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Online Registration",
    description: "Submit your initial application through our secure online portal.",
    icon: FileText,
    color: "bg-royal-blue"
  },
  {
    id: 2,
    title: "Preliminary Consultation",
    description: "Our team reviews your request and establishes initial contact.",
    icon: Users,
    color: "bg-teal"
  },
  {
    id: 3,
    title: "Document Intake",
    description: "Provide the necessary documents and information for assessment.",
    icon: FileText,
    color: "bg-coral"
  },
  {
    id: 4,
    title: "Case Review & Scheduling",
    description: "We evaluate your file and confirm a consultation slot.",
    icon: Calendar,
    color: "bg-royal-blue"
  },
  {
    id: 5,
    title: "Client Meeting",
    description: "Detailed discussion of eligibility, options, and next steps.",
    icon: Users,
    color: "bg-teal"
  },
  {
    id: 6,
    title: "Retainer Agreement",
    description: "Formal engagement begins with signing of the service agreement.",
    icon: FileSignature,
    color: "bg-coral"
  },
  {
    id: 7,
    title: "Application Process",
    description: "We commence the preparation and submission of your case.",
    icon: Send,
    color: "bg-royal-blue"
  }
];

export default function ProcessStepper() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-deep-navy mb-4">Our Professional Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Follow these 7 carefully designed steps to ensure your immigration journey is smooth and successful</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.id} className="relative" data-testid={`process-step-${step.id}`}>
                <div className="bg-off-white rounded-custom p-6 shadow-soft hover:shadow-soft-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-lg`}>
                      {step.id}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-poppins font-semibold text-lg text-deep-navy">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
