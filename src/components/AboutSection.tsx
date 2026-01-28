import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "EC-Council Authorized Training",
    "Hands-on Practical Labs",
    "Expert Instructors",
    "Global Recognition"
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
            About ASCII
          </h2>
          
          <p className="text-muted-foreground mb-8">
            ASCII is an Australian cybersecurity training institute registered with EC-Council. 
            We provide professional certification programs with hands-on labs and expert guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 bg-background px-4 py-2 rounded-lg border border-border">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
