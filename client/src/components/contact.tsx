import { useState } from "react";
import { ExternalLink, Phone, Mail, Globe, FileText, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/register', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        notes: data.message,
        source: 'App'
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We will contact you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    },
    onError: (error) => {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const quickActions = [
    {
      icon: FileText,
      title: "Register Now (Official Form)",
      description: "Complete our comprehensive registration form",
      href: "https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=xf4j8SksC06PW3LPZwg76xOtiBTO1TpBtjsvJy32FpVUNks3MVpGSUoyQkM4OTJHSUhCSjU3RzFSNC4u&Token=2e6e78763aaf4dc5b5ae676db2ee6163",
      color: "bg-coral hover:bg-coral/90",
      testId: "contact-register-form"
    },
    {
      icon: Mail,
      title: "Register via Email",
      description: "Send us your registration request",
      href: "mailto:Info@muskanimmigration.com?subject=Registration%20Request%20-%20MI%20Path",
      color: "bg-royal-blue hover:bg-royal-blue/90",
      testId: "contact-register-email"
    },
    {
      icon: Phone,
      title: "Call (416) 848-7363",
      description: "Speak directly with our consultants",
      href: "tel:14168487363",
      color: "bg-teal hover:bg-teal/90",
      testId: "contact-phone"
    },
    {
      icon: Globe,
      title: "Visit Our Website",
      description: "Explore our full range of services",
      href: "https://www.muskanimmigration.com",
      color: "bg-white hover:bg-gray-50 text-deep-navy border border-gray-300",
      testId: "contact-website"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-deep-navy mb-4">Contact & Register</h2>
          <p className="text-lg text-gray-600">Ready to start your immigration journey? Get in touch with us today</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Quick Contact Options */}
          <div className="space-y-6">
            <h3 className="font-poppins font-bold text-xl text-deep-navy mb-6">Get Started Now</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <a
                    key={index}
                    href={action.href}
                    target={action.href.startsWith('http') ? "_blank" : undefined}
                    rel={action.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`flex items-center justify-center ${action.color} text-white p-4 rounded-custom font-semibold text-lg transition-colors shadow-soft`}
                    data-testid={action.testId}
                  >
                    <IconComponent className="h-6 w-6 mr-3" />
                    {action.title}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white rounded-custom shadow-soft">
            <CardContent className="p-8">
              <h3 className="font-poppins font-bold text-xl text-deep-navy mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="rounded-custom"
                      data-testid="contact-form-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="rounded-custom"
                      data-testid="contact-form-email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="rounded-custom"
                    data-testid="contact-form-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700 mb-2">Service of Interest</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="rounded-custom" data-testid="contact-form-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="study-permit">Study Permit</SelectItem>
                      <SelectItem value="work-permit">Work Permit</SelectItem>
                      <SelectItem value="permanent-residency">Permanent Residency</SelectItem>
                      <SelectItem value="lmia">LMIA</SelectItem>
                      <SelectItem value="visitor-visa">Visitor Visa</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your immigration goals..."
                    className="rounded-custom"
                    data-testid="contact-form-message"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-royal-blue hover:bg-royal-blue/90 text-white py-4 rounded-custom font-semibold text-lg transition-colors"
                  data-testid="contact-form-submit"
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
