import { useState } from "react";
import { Search, CheckCircle, XCircle, Award, Calendar, Clock, BookOpen, Wrench, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface CertificateData {
  name: string;
  certificateNumber: string;
  course: string;
  attendance: string;
  duration: string;
  practicalStatus: string;
  theoryStatus: string;
  projectsStatus: string;
  certificateType: string;
  issueDate: string;
  expiryDate: string;
}

// Demo certificate data
const demoData: Record<string, CertificateData> = {
  "ECC8492589642": {
    name: "Mukul Raghav",
    certificateNumber: "ECC8492589642",
    course: "Certified Ethical Hacker (CEH)",
    attendance: "80%",
    duration: "1 Year (December 2024 - December 2025)",
    practicalStatus: "Completed",
    theoryStatus: "Completed",
    projectsStatus: "Completed",
    certificateType: "Temporary Certificate",
    issueDate: "2 September 2025",
    expiryDate: "6 February 2026"
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

    // Simulate API call
    setTimeout(() => {
      const result = demoData[certificateNumber.toUpperCase().replace(/\s/g, "")];
      if (result) {
        setSearchResult(result);
      } else {
        setNotFound(true);
      }
      setIsSearching(false);
    }, 1500);
  };

  return (
    <section id="verify" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Search className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Certificate Verification</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Verify Your</span>
            <br />
            <span className="text-gradient-gold">Certificate</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Enter your certificate number to verify authenticity and view your certification details.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="card-glass rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter Certificate Number (e.g., ECC8492589642)"
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
                className="flex-1 bg-muted/50 border-border h-12 text-foreground placeholder:text-muted-foreground"
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleSearch}
                disabled={!certificateNumber.trim() || isSearching}
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Search className="w-4 h-4" /> Verify
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Demo: Try "ECC8492589642" to see sample certificate details
            </p>
          </div>
        </div>

        {/* Results */}
        {searchResult && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="card-glass rounded-2xl overflow-hidden glow-gold">
              {/* Header */}
              <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 p-6 md:p-8 border-b border-border">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-secondary bg-secondary/20 px-2 py-1 rounded">VERIFIED</span>
                      <span className="text-xs text-muted-foreground">{searchResult.certificateType}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      {searchResult.name}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Certificate Number: <span className="text-foreground font-mono">{searchResult.certificateNumber}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Course */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Course</p>
                      <p className="text-foreground font-medium">{searchResult.course}</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="text-foreground font-medium">{searchResult.duration}</p>
                    </div>
                  </div>

                  {/* Issue Date */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Issue Date</p>
                      <p className="text-foreground font-medium">{searchResult.issueDate}</p>
                    </div>
                  </div>

                  {/* Expiry Date */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Expiry Date</p>
                      <p className="text-foreground font-medium">{searchResult.expiryDate}</p>
                    </div>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-6">Training Progress</h4>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Attendance */}
                    <div className="bg-muted/30 rounded-xl p-4 text-center">
                      <div className="font-display text-2xl font-bold text-gradient-gold mb-1">
                        {searchResult.attendance}
                      </div>
                      <p className="text-sm text-muted-foreground">Attendance</p>
                    </div>

                    {/* Theory */}
                    <div className="bg-muted/30 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <BookOpen className="w-5 h-5 text-secondary" />
                        <span className="text-secondary font-semibold">{searchResult.theoryStatus}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Theory</p>
                    </div>

                    {/* Practical */}
                    <div className="bg-muted/30 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Wrench className="w-5 h-5 text-secondary" />
                        <span className="text-secondary font-semibold">{searchResult.practicalStatus}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Practical</p>
                    </div>

                    {/* Projects */}
                    <div className="bg-muted/30 rounded-xl p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <FileText className="w-5 h-5 text-secondary" />
                        <span className="text-secondary font-semibold">{searchResult.projectsStatus}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Not Found */}
        {notFound && (
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="card-glass rounded-2xl p-8 text-center border border-destructive/30">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Certificate Not Found
              </h3>
              <p className="text-muted-foreground">
                The certificate number you entered could not be verified. Please check the number and try again.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificateVerification;
