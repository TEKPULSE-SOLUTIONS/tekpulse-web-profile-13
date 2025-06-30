
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  DollarSign,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProjectRequest() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.service ||
        !formData.description
      ) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return;
      }

      // Format message for WhatsApp
      const message = `
🚀 NEW PROJECT REQUEST

👤 Client Details:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ""}
${formData.phone ? `Phone: ${formData.phone}` : ""}

🛠 Project Details:
Service: ${formData.service}
${formData.budget ? `Budget: ${formData.budget}` : ""}
${formData.timeline ? `Timeline: ${formData.timeline}` : ""}

📝 Description:
${formData.description}

Please follow up with this client for project requirements.
      `.trim();

      const whatsappUrl = `https://wa.me/254798653043?text=${encodeURIComponent(message)}`;

      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 1000));

      window.open(whatsappUrl, "_blank");

      toast({
        title: "Request Submitted!",
        description:
          "Your project request has been sent. Our team will contact you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        description: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "ERP Systems Development",
    "Inventory Management Systems",
    "Web Development",
    "Mobile Money Integration",
    "Mobile App Development",
    "Data Analysis",
    "Machine Learning",
    "Computer Vision & Deep Learning",
  ];

  const process = [
    {
      icon: Users,
      title: "Free Consultation",
      description: "We discuss your requirements and provide expert advice.",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Get a detailed quote with no hidden costs.",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast development with regular progress updates.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold">
                  Start Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Ready to transform your business? Fill out the form below and
                  we'll get back to you within 24 hours with a custom proposal.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <Card className="border-2 border-blue-200/50">
                  <CardHeader>
                    <CardTitle>Project Request Form</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+254 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Under $5,000">
                            Under $5,000
                          </SelectItem>
                          <SelectItem value="$5,000 - $15,000">
                            $5,000 - $15,000
                          </SelectItem>
                          <SelectItem value="$15,000 - $50,000">
                            $15,000 - $50,000
                          </SelectItem>
                          <SelectItem value="$50,000 - $100,000">
                            $50,000 - $100,000
                          </SelectItem>
                          <SelectItem value="Over $100,000">
                            Over $100,000
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Preferred Timeline</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          handleInputChange("timeline", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ASAP">ASAP</SelectItem>
                          <SelectItem value="1-3 months">1-3 months</SelectItem>
                          <SelectItem value="3-6 months">3-6 months</SelectItem>
                          <SelectItem value="6-12 months">
                            6-12 months
                          </SelectItem>
                          <SelectItem value="Flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe your project requirements, goals, and any specific features you need..."
                        rows={4}
                        value={formData.description}
                        onChange={(e) =>
                          handleInputChange("description", e.target.value)
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Project Request
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields. We'll respond within 24 hours via
                      WhatsApp.
                    </p>
                  </CardContent>
                </Card>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">How It Works</h2>
                {process.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-2 border-blue-200/50 rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold">What You Get</h3>
                <div className="space-y-3">
                  {[
                    "Free initial consultation and requirement analysis",
                    "Detailed project proposal with timeline and costs",
                    "Custom solution designed for your specific needs",
                    "Regular progress updates and milestone reviews",
                    "Full source code and documentation",
                    "3 months of free support and maintenance",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold">Need Help Deciding?</h3>
                <p className="text-muted-foreground">
                  Not sure which service is right for you? Our experts are here
                  to help you choose the best solution for your business needs.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/help-desk">Get Expert Advice</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
