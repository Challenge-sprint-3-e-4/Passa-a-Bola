import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#",
  variant = "gradient"
}) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className={`relative rounded-3xl p-12 md:p-16 text-center overflow-hidden ${
          variant === "gradient" ? "gradient-secondary" : "bg-secondary"
        }`}>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
              variant === "gradient" ? "text-white" : ""
            }`}>
              {title}
            </h2>
            <p className={`text-lg md:text-xl mb-8 ${
              variant === "gradient" ? "text-white/90" : "text-muted-foreground"
            }`}>
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant={variant === "gradient" ? "default" : "gradient"}
                size="lg"
                className={variant === "gradient" ? "bg-white text-primary hover:bg-white/90" : ""}
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              {secondaryButtonText && (
                <Button
                  variant="outline"
                  size="lg"
                  className={variant === "gradient" ? "bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary" : ""}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;