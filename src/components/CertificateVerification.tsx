import { useState } from "react";
import { Search, CheckCircle, XCircle, Calendar, BookOpen, Wrench, FileText } from "lucide-react";
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
  },
  "ECC7531246890": {
    name: "Sarah Mitchell",
    certificateNumber: "ECC7531246890",
    course: "Certified Network Defender (CND)",
    attendance: "92%",
    duration: "6 Months (June 2025 - December 2025)",
    practicalStatus: "Completed",
    theoryStatus: "Completed",
    projectsStatus: "Completed",
    certificateType: "Permanent Certificate",
    issueDate: "15 December 2025",
    expiryDate: "15 December 2028"
  },
  "ECC6429183756": {
    name: "James Cooper",
    certificateNumber: "ECC6429183756",
    course: "Computer Hacking Forensics (CHFI)",
    attendance: "75%",
    duration: "8 Months (March 2025 - November 2025)",
    practicalStatus: "Completed",
    theoryStatus: "Completed",
    projectsStatus: "In Progress",
    certificateType: "Temporary Certificate",
    issueDate: "10 November 2025",
    expiryDate: "10 May 2026"
  },
  "ECC9847562130": {
    name: "Emily Watson",
    certificateNumber: "ECC9847562130",
    course: "Certified Ethical Hacker (CEH)",
    attendance: "95%",
    duration: "1 Year (January 2025 - January 2026)",
    practicalStatus: "Completed",
    theoryStatus: "Completed",
    projectsStatus: "Completed",
    certificateType: "Permanent Certificate",
    issueDate: "20 January 2026",
    expiryDate: "20 January 2029"
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
              placeholder="Certificate Number (e.g., ECC8492589642)"
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
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-primary/10 p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <div>
                    <span className="text-xs text-primary font-medium">VERIFIED • {searchResult.certificateType}</span>
                    <h3 className="font-display text-lg font-bold text-foreground">{searchResult.name}</h3>
                    <p className="text-xs text-muted-foreground font-mono">{searchResult.certificateNumber}</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Course</p>
                    <p className="text-foreground">{searchResult.course}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Duration</p>
                    <p className="text-foreground">{searchResult.duration}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground text-xs">Issue Date</p>
                      <p className="text-foreground">{searchResult.issueDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-muted-foreground text-xs">Expiry Date</p>
                      <p className="text-foreground">{searchResult.expiryDate}</p>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">Training Progress</p>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-muted/50 rounded p-2">
                      <p className="font-display text-lg font-bold text-primary">{searchResult.attendance}</p>
                      <p className="text-xs text-muted-foreground">Attendance</p>
                    </div>
                    <div className="bg-muted/50 rounded p-2">
                      <BookOpen className="w-4 h-4 mx-auto text-primary mb-1" />
                      <p className="text-xs text-muted-foreground">Theory ✓</p>
                    </div>
                    <div className="bg-muted/50 rounded p-2">
                      <Wrench className="w-4 h-4 mx-auto text-primary mb-1" />
                      <p className="text-xs text-muted-foreground">Practical ✓</p>
                    </div>
                    <div className="bg-muted/50 rounded p-2">
                      <FileText className="w-4 h-4 mx-auto text-primary mb-1" />
                      <p className="text-xs text-muted-foreground">Projects ✓</p>
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
