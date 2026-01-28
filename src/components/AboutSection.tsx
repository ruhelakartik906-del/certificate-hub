import { Shield, Award, Globe, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "EC-Council Authorized Training Center",
    "ANSI Accredited Certification Programs",
    "Hands-on Practical Training Labs",
    "Industry Expert Instructors",
    "Global Recognition & Career Support",
    "Flexible Learning Options"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Based in Australia</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Your Path to</span>
              <br />
              <span className="text-gradient-gold">Cybersecurity Excellence</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              CyberShield Academy is Australia's leading EC-Council authorized training center. 
              We provide world-class cybersecurity education with hands-on labs, expert instructors, 
              and globally recognized certifications that open doors to top security positions worldwide.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="grid gap-6">
            <div className="card-glass rounded-2xl p-6 md:p-8 glow-red">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    EC-Council Partnership
                  </h3>
                  <p className="text-muted-foreground">
                    Official authorized training partner delivering certified ethical hacker programs 
                    recognized by the International Council of E-Commerce Consultants.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass rounded-2xl p-6 md:p-8 glow-gold">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    ANSI Accredited
                  </h3>
                  <p className="text-muted-foreground">
                    Our certifications meet ISO/IEC 17024 standards, ensuring your credentials 
                    are recognized and respected by employers globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
