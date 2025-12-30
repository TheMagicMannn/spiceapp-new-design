import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
  Loader2,
  CheckCircle,
  Home,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { trackFormSubmit } from "@/lib/gtag";

const reportTypes = [
  {
    id: "safety",
    icon: Shield,
    title: "Safety Concern",
    description: "Report harassment, threats, or other safety issues",
    gradient: "from-red-500 to-rose-500",
  },
  {
    id: "user",
    icon: UserX,
    title: "Report a User",
    description: "Report fake profiles or inappropriate behavior",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "bug",
    icon: Bug,
    title: "Technical Bug",
    description: "Report app crashes, errors, or things not working",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: "content",
    icon: Flag,
    title: "Content Violation",
    description: "Report inappropriate content or spam",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: "feedback",
    icon: MessageCircle,
    title: "General Feedback",
    description: "Share suggestions, ideas, or concerns",
    gradient: "from-blue-500 to-cyan-500",
  }
];

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    reportType: "",
    subject: "",
    details: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reportId, setReportId] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("report-issue", {
        body: {
          report_type: formData.reportType,
          subject: formData.subject,
          details: formData.details,
          email: formData.email,
        },
      });

      if (error) throw error;
      
      // Set success state with report ID
      setReportId(data?.report_id || crypto.randomUUID());
      setIsSubmitted(true);
      trackFormSubmit('report_issue');
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to submit report";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
      console.error('Error submitting report:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewReport = () => {
    setIsSubmitted(false);
    setFormData({ reportType: "", subject: "", details: "", email: "" });
    setReportId("");
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Report an Issue - SPICE",
    "description": "Report safety concerns, bugs, or content violations on SPICE"
  };

  return (
    <>
      <SEO
        title="Report an Issue | SPICE - Safety & Support"
        description="Report safety concerns, technical bugs, user violations, or provide feedback. We take all reports seriously and respond promptly."
        keywords="report issue SPICE, safety report, bug report, report user, content violation"
        canonical="https://thespiceapp.com/support/report"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />

        {/* Success Screen Overlay */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
                className="relative max-w-2xl w-full mx-4"
              >
                <div className="glass-card rounded-3xl p-8 md:p-12 text-center border-2 border-primary/20">
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-green-500/50"
                  >
                    <CheckCircle className="w-14 h-14 text-white" />
                  </motion.div>

                  {/* Success Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                      Report Submitted Successfully!
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                      Thank you for helping us maintain a safe community
                    </p>
                  </motion.div>

                  {/* Report Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-muted/30 rounded-2xl p-6 mb-8 border border-border/50"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="text-left">
                        <p className="font-semibold text-lg mb-1">What happens next?</p>
                        <ul className="text-muted-foreground space-y-2 text-sm md:text-base">
                          <li>• Our support team will review your report within 24-48 hours</li>
                          <li>• We'll investigate the issue and take appropriate action</li>
                          <li>• You'll receive a follow-up email at <span className="text-primary font-medium">{formData.email}</span></li>
                          <li>• Your report ID: <span className="font-mono text-xs md:text-sm text-primary">{reportId}</span></li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Button
                      onClick={handleGoHome}
                      size="lg"
                      variant="hero"
                      className="text-lg px-8 py-6"
                    >
                      <Home className="w-5 h-5 mr-2" />
                      Return to Home
                    </Button>
                    <Button
                      onClick={handleNewReport}
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-2"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Submit Another Report
                    </Button>
                  </motion.div>

                  {/* Additional Info */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-sm text-muted-foreground mt-8"
                  >
                    Need immediate help? Contact us at{" "}
                    <a href="mailto:support@thespiceapp.com" className="text-primary hover:underline">
                      support@thespiceapp.com
                    </a>
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Report an <span className="text-gradient">Issue</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Your safety and experience matter. Select the type of issue you'd like to report.
              </p>
            </motion.div>

            {/* Report Type Cards */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {reportTypes.map((type, index) => {
                const Icon = type.icon;
                const isSelected = formData.reportType === type.id;
                
                return (
                  <motion.button
                    key={type.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    onClick={() => setFormData({ ...formData, reportType: type.id })}
                    className={`glass-card rounded-xl p-6 text-center group transition-all ${
                      isSelected ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-sm font-bold mb-1">{type.title}</h3>
                    <p className="text-xs text-muted-foreground">{type.description}</p>
                  </motion.button>
                );
              })}
            </div>

            {/* Report Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Submit Your Report</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Report Type *
                    </label>
                    <select
                      value={formData.reportType}
                      onChange={(e) =>
                        setFormData({ ...formData, reportType: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a report type...</option>
                      {reportTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Subject *
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="Brief description of the issue"
                        required
                        className="bg-muted/50 border-border/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Your Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        required
                        className="bg-muted/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      Details *
                    </label>
                    <Textarea
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      placeholder="Please provide as much detail as possible. Include usernames, dates, times, and any other relevant information."
                      required
                      rows={6}
                      className="bg-muted/50 border-border/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    variant="hero"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting Report...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Report
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Info & Guidelines */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Safety First</h2>
                </div>

                <div className="space-y-4">
                  {/* Emergency Notice */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-xl p-5 border-2 border-red-500/30 bg-red-500/5"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold mb-1 text-red-400">Emergency?</h3>
                        <p className="text-sm text-muted-foreground">
                          If you are in immediate danger, please contact local emergency services (911 in the US) immediately.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* What Happens Next */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-xl p-5"
                  >
                    <h3 className="font-bold mb-3">What Happens Next?</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-500 font-bold text-sm">1</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">We Review</p>
                          <p className="text-xs text-muted-foreground">Your report is reviewed within 24-48 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-purple-500 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">We Investigate</p>
                          <p className="text-xs text-muted-foreground">We gather information and look into the issue</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-500 font-bold text-sm">3</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">We Take Action</p>
                          <p className="text-xs text-muted-foreground">Appropriate action is taken and we follow up</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Report Guidelines */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="glass-card rounded-xl p-5"
                  >
                    <h3 className="font-bold mb-3">Reporting Guidelines</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Provide as much detail as possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Include usernames, dates, and times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>Be honest and accurate in your report</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>We keep all reports confidential</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default ReportIssue;
