import { Clock, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const courses = [
  {
    title: "Certified Ethical Hacker (CEH)",
    duration: "1 Year",
    sessions: "December - December",
    description: "Master the tools and techniques used by hackers and information security professionals to lawfully test networks and systems.",
    features: ["Theory Classes", "Practical Labs", "Live Projects", "Exam Preparation"],
    highlight: true
  },
  {
    title: "Certified Network Defender (CND)",
    duration: "6 Months",
    sessions: "Flexible Batches",
    description: "Learn network defense fundamentals, secure network protocols, and how to protect organizational assets from cyber threats.",
    features: ["Network Security", "Threat Analysis", "Defense Strategies", "Certification"],
    highlight: false
  },
  {
    title: "Computer Hacking Forensics (CHFI)",
    duration: "8 Months",
    sessions: "Flexible Batches",
    description: "Develop expertise in digital forensics and evidence collection to investigate cyber crimes and security breaches.",
    features: ["Digital Forensics", "Evidence Collection", "Investigation", "Reporting"],
    highlight: false
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 md:py-32 hero-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-secondary" />
            <span className="text-sm text-secondary">Our Programs</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">EC-Council Certified</span>
            <br />
            <span className="text-gradient-red">Training Programs</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Comprehensive cybersecurity courses designed to transform you into a skilled security professional with globally recognized credentials.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`card-glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] ${
                course.highlight ? "glow-red border-primary/30" : "border-border/50"
              } border`}
            >
              {course.highlight && (
                <div className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                {course.title}
              </h3>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{course.sessions}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {course.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant={course.highlight ? "hero" : "cyber"} className="w-full">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
