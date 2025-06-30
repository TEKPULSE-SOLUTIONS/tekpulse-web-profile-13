
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingCart,
  Star,
  Calendar,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ProjectsOnSale() {
  const { toast } = useToast();
  const [purchasingProject, setPurchasingProject] = useState<string | null>(
    null,
  );

  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform Template",
      description:
        "Complete e-commerce solution with payment integration and admin dashboard.",
      originalPrice: "$2,000",
      salePrice: "$1,500",
      discount: "25%",
      rating: 4.8,
      reviews: 24,
      timeLeft: "5 days left",
      features: [
        "Payment Gateway",
        "Admin Dashboard",
        "Mobile Responsive",
        "SEO Optimized",
      ],
    },
    {
      id: "inventory-management",
      title: "Inventory Management System",
      description:
        "Ready-to-deploy inventory system with barcode scanning and reporting.",
      originalPrice: "$1,333",
      salePrice: "$1,000",
      discount: "25%",
      rating: 4.9,
      reviews: 18,
      timeLeft: "12 days left",
      features: [
        "Barcode Scanner",
        "Real-time Reports",
        "Multi-location",
        "API Integration",
      ],
    },
    {
      id: "crm-software",
      title: "CRM Software Package",
      description:
        "Customer relationship management system with sales pipeline and analytics.",
      originalPrice: "$2,667",
      salePrice: "$2,000",
      discount: "25%",
      rating: 4.7,
      reviews: 31,
      timeLeft: "8 days left",
      features: [
        "Sales Pipeline",
        "Contact Management",
        "Email Integration",
        "Analytics Dashboard",
      ],
    },
    {
      id: "erp-system",
      title: "ERP System Complete",
      description:
        "Comprehensive Enterprise Resource Planning system with modules for finance, HR, and operations.",
      originalPrice: "$5,556",
      salePrice: "$5,000",
      discount: "10%",
      rating: 4.9,
      reviews: 15,
      timeLeft: "15 days left",
      features: [
        "Financial Management",
        "HR & Payroll",
        "Inventory Control",
        "Reporting & Analytics",
        "Multi-company Support",
        "Role-based Access",
      ],
    },
  ];

  const handlePurchase = async (project: any) => {
    setPurchasingProject(project.id);

    try {
      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For now, we'll redirect to WhatsApp with purchase intent
      // Later you can integrate with M-Pesa API here
      const message = `Hi, I want to purchase "${project.title}" for ${project.salePrice}. Please help me complete this purchase.`;
      const whatsappUrl = `https://wa.me/254798653043?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");

      toast({
        title: "Purchase Initiated",
        description:
          "You'll be redirected to WhatsApp to complete your purchase with our team.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to initiate purchase. Please try again.",
        variant: "destructive",
      });
    } finally {
      setPurchasingProject(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Projects <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">on Sale</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-built, high-quality software projects available at discounted
              prices. Perfect for businesses looking for quick deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                      variant="destructive"
                      className="bg-gradient-to-r from-red-500 to-orange-500"
                    >
                      {project.discount} OFF
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.timeLeft}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {project.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({project.reviews} reviews)
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {project.salePrice}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        {project.originalPrice}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">
                      Features Included:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-muted-foreground flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    onClick={() => handlePurchase(project)}
                    disabled={purchasingProject === project.id}
                  >
                    {purchasingProject === project.id ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 w-4 h-4" />
                        Purchase Now
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="border-2 border-blue-200 rounded-2xl p-12 space-y-6">
              <h2 className="text-3xl font-bold">
                Looking for Something Specific?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Can't find the perfect project? Let us know what you need and
                we'll create a custom solution for you.
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link to="/project-request">
                  Request Custom Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
