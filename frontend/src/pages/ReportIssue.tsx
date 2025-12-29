import { useState } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  AlertTriangle, 
  Shield, 
  Bug, 
  UserX, 
  Flag,
  MessageCircle,
  Send,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { trackFormSubmit } from "@/lib/gtag";

const ReportIssue = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reportTypes = [
    {
      id: "safety",
      icon: Shield,
      title: "Safety Concern",
      description: "Report harassment, threats, or other safety issues",
      color: "red",
      urgent: true
    },
    {
      id: "user",
      icon: UserX,
      title: "Report a User",
      description: "Report fake profiles, inappropriate behavior, or violations",
      color: "orange"
    },
    {
      id: "bug",
      icon: Bug,
      title: "Technical Bug",
      description: "Report app crashes, errors, or things not working correctly",
      color: "purple"
    },
    {
      id: "content",
      icon: Flag,
      title: "Content Violation",
      description: "Report inappropriate content, spam, or policy violations",
      color: "amber"
    },
    {
      id: "feedback",
      icon: MessageCircle,
      title: "General Feedback",
      description: "Share suggestions, ideas, or general concerns",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", icon: "text-red-500" },
      orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", icon: "text-orange-500" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", icon: "text-purple-500" },
      amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", icon: "text-amber-500" },
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: "text-blue-500" },
    };
    return colors[color] || colors.blue;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subject.trim()) {
      toast.error("Please enter a subject for your report");
      return;
    }
    
    if (!details.trim()) {
      toast.error("Please provide details about the issue");
      return;
    }
    
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const backendUrl = import.meta.env.REACT_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL;
      
      const response = await fetch(`${backendUrl}/report-issue`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          report_type: selectedType,
          subject: subject,
          details: details,
          email: email,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || 'Failed to submit report');
      }
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Your report has been submitted successfully!");
    } catch (error) {
      setIsSubmitting(false);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit report';
      toast.error(errorMessage);
      console.error('Error submitting report:', error);
    }
  };

  const handleNewReport = () => {
    setIsSubmitted(false);
    setSelectedType(null);
    setSubject("");
    setDetails("");
    setEmail("");
  };

  return (
    <>
      <SEO
        title="Report an Issue | SPICE - Safety & Support"
        description="Report safety concerns, technical bugs, user violations, or provide feedback. We take all reports seriously and respond promptly."
        keywords="report issue SPICE, safety report, bug report, report user, content violation"
        canonical="https://thespiceapp.com/support/report"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />

        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-400">Report an Issue</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                We're Here to Help
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your safety and experience matter. Select the type of issue you'd like to report.
              </p>
            </div>

            {/* Emergency Notice */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-red-400 font-medium">Emergency?</p>
                  <p className="text-sm text-muted-foreground">
                    If you are in immediate danger, please contact local emergency services (911 in the US) immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Report Types */}
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-lg font-semibold text-white mb-4">What would you like to report?</h2>
              <div className="space-y-4">
                {reportTypes.map((type) => {
                  const Icon = type.icon;
                  const colors = getColorClasses(type.color);
                  const isSelected = selectedType === type.id;
                  
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`w-full ${colors.bg} border ${isSelected ? 'border-primary ring-2 ring-primary/20' : colors.border} rounded-xl p-4 hover:border-primary/50 transition-all text-left`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${colors.icon}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-white">{type.title}</h3>
                            {type.urgent && (
                              <span className="text-xs font-medium text-red-400 bg-red-500/20 px-2 py-0.5 rounded">
                                Priority
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                        <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Report Form (shown when type selected) */}
            {selectedType && !isSubmitted && (
              <div className="max-w-3xl mx-auto mb-12">
                <div className="bg-card/50 border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Describe the Issue</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Brief description of the issue"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Details
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Please provide as much detail as possible. Include usernames, dates, times, and any other relevant information."
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Your Email (for follow-up)
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        All reports are reviewed by our team within 24-48 hours. For urgent safety concerns, we prioritize immediate review.
                      </p>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Report"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* Success Message */}
            {isSubmitted && (
              <div className="max-w-3xl mx-auto mb-12">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <PartyPopper className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-lg text-green-400 mb-2">Your report has been submitted successfully.</p>
                  <p className="text-muted-foreground mb-6">
                    Our team will review your report and get back to you within 24-48 hours at <span className="text-white font-medium">{email}</span>.
                  </p>
                  <div className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg text-left mb-6">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-white mb-1">What happens next?</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>You'll receive a confirmation email shortly</li>
                        <li>Our team will investigate your report</li>
                        <li>We'll follow up with any updates or questions</li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={handleNewReport}
                    className="bg-card border border-border hover:border-primary/50 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    Submit Another Report
                  </button>
                </div>
              </div>
            )}

            {/* What Happens Next */}
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-lg font-semibold text-white mb-4">What Happens After You Report?</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-card/50 border border-border rounded-xl p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-500 font-bold">1</span>
                  </div>
                  <h3 className="font-medium text-white mb-1">We Review</h3>
                  <p className="text-sm text-muted-foreground">Our team reviews your report within 24-48 hours</p>
                </div>
                <div className="bg-card/50 border border-border rounded-xl p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-500 font-bold">2</span>
                  </div>
                  <h3 className="font-medium text-white mb-1">We Investigate</h3>
                  <p className="text-sm text-muted-foreground">We look into the issue and gather information</p>
                </div>
                <div className="bg-card/50 border border-border rounded-xl p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-500 font-bold">3</span>
                  </div>
                  <h3 className="font-medium text-white mb-1">We Respond</h3>
                  <p className="text-sm text-muted-foreground">We take action and follow up with you</p>
                </div>
              </div>
            </div>

            {/* Other Ways to Get Help */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Need Immediate Help?</h3>
                <p className="text-muted-foreground mb-4">
                  For general questions or faster response, try these options:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/support/help"
                    className="inline-flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    Help Center
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default ReportIssue;
