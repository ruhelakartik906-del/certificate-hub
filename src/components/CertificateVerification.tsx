import { useState } from "react";
import { Search, CheckCircle, XCircle, Calendar, BookOpen, Wrench, FileText, Award, Users, Clock, Target, Shield, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface CertificateData {
  name: string;
  certificateNumber: string;
  course: string;
  courseCode: string;
  attendance: string;
  duration: string;
  practicalStatus: string;
  practicalHours: string;
  theoryStatus: string;
  theoryHours: string;
  projectsStatus: string;
  projectsCount: string;
  methodsLearned: string[];
  eventsAttended: string[];
  certificateType: string;
  issueDate: string;
  expiryDate: string;
  permanentIssueDate?: string;
  examScore: string;
  accreditation: string;
  instructor: string;
}

const demoData: Record<string, CertificateData> = {
  "ECC8492589642": {
    name: "Mukul Raghav",
    certificateNumber: "ECC8492589642",
    course: "Certified Ethical Hacker",
    courseCode: "CEH",
    attendance: "80%",
    duration: "1 Year (December 2024 - December 2025)",
    practicalStatus: "Completed",
    practicalHours: "120 Hours",
    theoryStatus: "Completed",
    theoryHours: "80 Hours",
    projectsStatus: "Completed",
    projectsCount: "5 Projects",
    methodsLearned: ["Penetration Testing", "Network Security", "Vulnerability Assessment", "Social Engineering", "Malware Analysis"],
    eventsAttended: ["CTF Competition 2025", "Security Workshop", "Live Hacking Demo"],
    certificateType: "Permanent Certificate",
    issueDate: "2 September 2025",
    expiryDate: "6 February 2026",
    permanentIssueDate: "24 January 2026",
    examScore: "85%",
    accreditation: "ANSI Accredited #0732 ISO/IEC 17024",
    instructor: "Sanjay Bavisi, President"
  },
  "ECC7531246890": {
    name: "Sarah Mitchell",
    certificateNumber: "ECC7531246890",
    course: "Certified Network Defender",
    courseCode: "CND",
    attendance: "92%",
    duration: "6 Months (June 2025 - December 2025)",
    practicalStatus: "Completed",
    practicalHours: "80 Hours",
    theoryStatus: "Completed",
    theoryHours: "60 Hours",
    projectsStatus: "Completed",
    projectsCount: "4 Projects",
    methodsLearned: ["Network Defense", "Firewall Configuration", "IDS/IPS Management", "VPN Security"],
    eventsAttended: ["Network Security Summit", "Defense Workshop"],
    certificateType: "Permanent Certificate",
    issueDate: "15 December 2025",
    expiryDate: "15 December 2028",
    examScore: "91%",
    accreditation: "ANSI Accredited #0732 ISO/IEC 17024",
    instructor: "Sanjay Bavisi, President"
  },
  "ECC6429183756": {
    name: "James Cooper",
    certificateNumber: "ECC6429183756",
    course: "Computer Hacking Forensics Investigator",
    courseCode: "CHFI",
    attendance: "75%",
    duration: "8 Months (March 2025 - November 2025)",
    practicalStatus: "Completed",
    practicalHours: "100 Hours",
    theoryStatus: "Completed",
    theoryHours: "70 Hours",
    projectsStatus: "In Progress",
    projectsCount: "3/5 Projects",
    methodsLearned: ["Digital Forensics", "Evidence Collection", "Data Recovery", "Incident Response"],
    eventsAttended: ["Forensics Bootcamp"],
    certificateType: "Temporary Certificate",
    issueDate: "10 November 2025",
    expiryDate: "10 May 2026",
    examScore: "78%",
    accreditation: "ANSI Accredited #0732 ISO/IEC 17024",
    instructor: "Sanjay Bavisi, President"
  },
  "ECC9847562130": {
    name: "Emily Watson",
    certificateNumber: "ECC9847562130",
    course: "Certified Ethical Hacker",
    courseCode: "CEH",
    attendance: "95%",
    duration: "1 Year (January 2025 - January 2026)",
    practicalStatus: "Completed",
    practicalHours: "130 Hours",
    theoryStatus: "Completed",
    theoryHours: "85 Hours",
    projectsStatus: "Completed",
    projectsCount: "6 Projects",
    methodsLearned: ["Advanced Penetration Testing", "Cloud Security", "IoT Security", "Web Application Security", "Mobile Security"],
    eventsAttended: ["CTF Championship 2025", "Security Conference", "Ethical Hacking Workshop", "Bug Bounty Event"],
    certificateType: "Permanent Certificate",
    issueDate: "20 January 2026",
    expiryDate: "20 January 2029",
    examScore: "94%",
    accreditation: "ANSI Accredited #0732 ISO/IEC 17024",
    instructor: "Sanjay Bavisi, President"
  }
};

const CertificateVerification = () => {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [searchResult, setSearchResult] = useState<CertificateData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setNotFound(false);
    setSearchResult(null);

    setTimeout(() => {
      const result = demoData[certificateNumber.toUpperCase().replace(/\s/g, "")];
      if (result) {
        setSearchResult(result);
      } else {
        setNotFound(true);
      }
      setIsSearching(false);
    }, 1000);
  };

  return (
    <section id="verify" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Verify Certificate
          </h2>
          <p className="text-muted-foreground text-sm">
            Enter your certificate number to verify and view details.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Certificate Number (e.g., ECC0000000000)"
              value={certificateNumber}
              onChange={(e) => setCertificateNumber(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button 
              onClick={handleSearch}
              disabled={!certificateNumber.trim() || isSearching}
            >
              {isSearching ? (
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <Search className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Results */}
        {searchResult && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-primary/10 p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <div>
                      <span className="text-xs text-primary font-medium">VERIFIED • {searchResult.certificateType}</span>
                      <h3 className="font-display text-lg font-bold text-foreground">{searchResult.name}</h3>
                      <p className="text-xs text-muted-foreground font-mono">{searchResult.certificateNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-bold">{searchResult.courseCode}</span>
                  </div>
                </div>
              </div>

              {/* Course & Accreditation */}
              <div className="p-4 border-b border-border bg-muted/20">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="font-display font-semibold text-foreground">{searchResult.course}</h4>
                </div>
                <p className="text-xs text-muted-foreground">{searchResult.accreditation}</p>
                <p className="text-xs text-muted-foreground">Certified by: {searchResult.instructor}</p>
              </div>

              {/* Details Grid */}
              <div className="p-4 space-y-4">
                {/* Dates & Duration */}
                <div className={`grid ${searchResult.permanentIssueDate ? 'grid-cols-4' : 'grid-cols-3'} gap-4 text-sm`}>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground text-xs">Duration</p>
                      <p className="text-foreground text-xs">{searchResult.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground text-xs">Issue Date</p>
                      <p className="text-foreground text-xs">{searchResult.issueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground text-xs">Expiry Date</p>
                      <p className="text-foreground text-xs">{searchResult.expiryDate}</p>
                    </div>
                  </div>
                  {searchResult.permanentIssueDate && (
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-muted-foreground text-xs">Permanent Issue Date</p>
                        <p className="text-primary text-xs font-semibold">{searchResult.permanentIssueDate}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Progress Stats */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" /> Training Progress
                  </p>
                  <div className="grid grid-cols-5 gap-2 text-center">
                    <div className="bg-muted/50 rounded p-2">
                      <Users className="w-4 h-4 mx-auto text-primary mb-1" />
                      <p className="font-display text-sm font-bold text-primary">{searchResult.attendance}</p>
                      <p className="text-xs text-muted-foreground">Attendance</p>
                    </div>
                    <div className="bg-muted/50 rounded p-2">
                      <BookOpen className="w-4 h-4 mx-auto text-primary mb-1" />
                      <p className="font-display text-sm font-bold text-primary">{searchResult.theoryHours}</p>
                      <p className="text-xs text-muted-foreground">Theory ✓</p>
                    </div>
                    <div className="bg-muted/50 rounded p-2">
                      <Wrench className="w-4 h-4 mx-auto text-primary mb-1" />
                      <p className="font-display text-sm font-bold text-primary">{searchResult.practicalHours}</p>
                      <p className="text-xs text-muted-foreground">Practical ✓</p>
                    </div>
                    <div className="bg-muted/50 rounded p-2">
                      <FileText className="w-4 h-4 mx-auto text-primary mb-1" />
                      <p className="font-display text-sm font-bold text-primary">{searchResult.projectsCount}</p>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                    <div className="bg-muted/50 rounded p-2">
                      <Award className="w-4 h-4 mx-auto text-primary mb-1" />
                      <p className="font-display text-sm font-bold text-primary">{searchResult.examScore}</p>
                      <p className="text-xs text-muted-foreground">Exam Score</p>
                    </div>
                  </div>
                </div>

                {/* Methods Learned */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Methods & Skills Learned
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {searchResult.methodsLearned.map((method, index) => (
                      <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Events Attended */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Events Attended
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {searchResult.eventsAttended.map((event, index) => (
                      <span key={index} className="bg-secondary/50 text-secondary-foreground text-xs px-2 py-1 rounded border border-border">
                        {event}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Important Notices */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3 font-semibold">⚠️ Important Notices</p>
                  <div className="space-y-2">
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded p-3">
                      <p className="text-xs text-amber-700 dark:text-amber-400">
                        <strong>Demo Period Certificate:</strong> This certificate is initially issued to students for the demo/training period. Permanent certificates are issued after successful completion of all requirements and verification.
                      </p>
                    </div>
                    <div className="bg-destructive/10 border border-destructive/30 rounded p-3">
                      <p className="text-xs text-destructive">
                        <strong>Legal Disclaimer:</strong> If the certificate holder engages in any illegal or unethical activities using the skills learned, ASCII Institute and EC-Council hold no responsibility. The individual will be solely liable for their actions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Not Found */}
        {notFound && (
          <div className="max-w-md mx-auto">
            <div className="bg-card border border-destructive/30 rounded-lg p-6 text-center">
              <XCircle className="w-8 h-8 text-destructive mx-auto mb-2" />
              <h3 className="font-display font-semibold text-foreground mb-1">Not Found</h3>
              <p className="text-muted-foreground text-sm">Certificate number not found. Please check and try again.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificateVerification;
