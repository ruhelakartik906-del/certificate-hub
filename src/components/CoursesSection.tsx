import { Clock } from "lucide-react";

const courses = [
  {
    title: "Certified Ethical Hacker (CEH)",
    duration: "1 Year",
    description: "Learn ethical hacking tools and techniques with EC-Council certification."
  },
  {
    title: "Certified Network Defender (CND)",
    duration: "6 Months",
    description: "Network security fundamentals and defense strategies."
  },
  {
    title: "Computer Hacking Forensics (CHFI)",
    duration: "8 Months",
    description: "Digital forensics and cyber crime investigation."
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Our Courses
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            EC-Council certified training programs for cybersecurity professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {course.title}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <p className="text-muted-foreground text-sm">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
