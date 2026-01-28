import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full mb-6">
            EC-Council Registered • Australia
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
            ASCII Training Institute
          </h1>

          {/* Subheading */}
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Professional cybersecurity training with globally recognized EC-Council certifications. Based in Australia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}>
              View Courses
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("verify")?.scrollIntoView({ behavior: "smooth" })}>
              Verify Certificate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
