import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, RefreshCw, Download, ArrowLeft, TrendingUp, Check, Copy, Share2, Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { QuizInsights } from '@/pages/BDSMQuiz';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas';

interface QuizResultsProps {
  insights: QuizInsights;
  onRestart: () => void;
  responses?: any[];
}

const QuizResults: React.FC<QuizResultsProps> = ({ insights, onRestart, responses }) => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const getDominanceLabel = (score: number) => {
    if (score < 25) return 'Submissive';
    if (score < 45) return 'Sub-leaning Switch';
    if (score < 55) return 'Switch';
    if (score < 75) return 'Dom-leaning Switch';
    return 'Dominant';
  };

  const handleDownloadImage = async () => {
    if (!resultsRef.current) return;
    
    setIsDownloading(true);
    
    try {
      // Capture the results section as an image
      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: '#1a1625',
        scale: 2, // Higher quality
        logging: false,
        useCORS: true,
      });
      
      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `SPICE-BDSM-Quiz-Results-${Date.now()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          toast({
            title: "Downloaded!",
            description: "Your results have been saved as an image",
          });
        }
      }, 'image/png');
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download results. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const getShareText = () => {
    let text = "🎯 Just completed the SPICE BDSM Quiz!\n\n";
    
    if (insights.dominanceScore !== undefined) {
      const label = getDominanceLabel(insights.dominanceScore);
      text += `My results: ${label} (${insights.dominanceScore}% dominance)\n`;
    }
    
    if (insights.bdsmRole?.primary) {
      text += `BDSM Role: ${insights.bdsmRole.primary}\n`;
    }
    
    text += "\nDiscover your compatibility! 🔥\n";
    return text;
  };

  const getShareUrl = () => {
    return window.location.origin + '/quiz/bdsm';
  };

  const handleShareNative = async () => {
    const shareData = {
      title: 'My SPICE BDSM Quiz Results',
      text: getShareText(),
      url: getShareUrl(),
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        toast({
          title: "Shared!",
          description: "Thanks for sharing your results",
        });
      } else {
        // Fallback to showing share menu
        setShowShareMenu(true);
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Share error:', error);
        setShowShareMenu(true);
      }
    }
  };

  const handleCopyLink = () => {
    const shareText = getShareText() + '\n' + getShareUrl();
    navigator.clipboard.writeText(shareText);
    toast({
      title: "Copied!",
      description: "Results copied to clipboard",
    });
    setShowShareMenu(false);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    setShowShareMenu(false);
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    setShowShareMenu(false);
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(getShareUrl());
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    setShowShareMenu(false);
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(getShareText() + '\n' + getShareUrl());
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setShowShareMenu(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Button variant="outline" size="sm" onClick={onRestart}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Retake Quiz
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 md:p-8" ref={resultsRef}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-pink-500/20 mb-6">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Your Results Are Ready!</h1>
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary to-pink-500 text-white font-bold text-xl mt-4">
            {insights.archetype}
          </div>
        </motion.div>

        {/* Personality Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card/50 border border-border/50 rounded-2xl p-6 mb-6"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-500" />
            Your Intimacy Profile
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {insights.personalitySummary}
          </p>
        </motion.div>

        {/* Scores Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          <div className="bg-card/50 border border-border/50 rounded-xl p-5">
            <h3 className="font-semibold mb-3">Power Dynamic Spectrum</h3>
            <div className="mb-2">
              <Progress value={insights.scores.dominanceSubmission} className="h-3" />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Submissive</span>
              <span className="font-medium text-primary">
                {getDominanceLabel(insights.scores.dominanceSubmission)}
              </span>
              <span className="text-muted-foreground">Dominant</span>
            </div>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-xl p-5">
            <h3 className="font-semibold mb-3">Openness to Exploration</h3>
            <div className="mb-2">
              <Progress value={insights.scores.opennessToExploration} className="h-3" />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Conservative</span>
              <span className="font-medium text-primary">
                {insights.scores.opennessToExploration}%
              </span>
              <span className="text-muted-foreground">Adventurous</span>
            </div>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Communication Style</h3>
            <p className="text-lg font-medium text-primary">
              {insights.scores.communicationStyle}
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Experience Level</h3>
            <p className="text-lg font-medium text-primary">
              {insights.scores.experienceLevel}
            </p>
          </div>
        </motion.div>

        {/* Lifestyle Preferences */}
        {insights.lifestyle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card/50 border border-border/50 rounded-2xl p-6 mb-6"
          >
            <h2 className="text-xl font-bold mb-4">Your Lifestyle Preferences</h2>
            <div className="mb-4">
              <div className="inline-block px-4 py-2 rounded-lg bg-primary/20 text-primary font-semibold mb-2">
                {insights.lifestyle.primary}
              </div>
              <p className="text-muted-foreground mt-2">{insights.lifestyle.description}</p>
            </div>
            {insights.lifestyle.secondary && insights.lifestyle.secondary.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 text-sm">Also Compatible With:</h3>
                <div className="flex flex-wrap gap-2">
                  {insights.lifestyle.secondary.map((style, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-muted text-sm">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* BDSM Role */}
        {insights.bdsmRole && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-6 mb-6"
          >
            <h2 className="text-xl font-bold mb-4">Your BDSM Role</h2>
            <div className="mb-4">
              <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 font-bold text-lg mb-2">
                {insights.bdsmRole.primary}
              </div>
              <p className="text-muted-foreground mt-2">{insights.bdsmRole.description}</p>
            </div>
            {insights.bdsmRole.style && insights.bdsmRole.style.length > 0 && (
              <div className="mb-3">
                <h3 className="font-semibold mb-2 text-sm">Your Style:</h3>
                <div className="flex flex-wrap gap-2">
                  {insights.bdsmRole.style.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {insights.bdsmRole.secondary && insights.bdsmRole.secondary.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2 text-sm">Secondary Roles:</h3>
                <div className="flex flex-wrap gap-2">
                  {insights.bdsmRole.secondary.map((role, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-muted text-sm">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Top Kinks */}
        {insights.topKinks && insights.topKinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card/50 border border-border/50 rounded-2xl p-6 mb-6"
          >
            <h2 className="text-xl font-bold mb-4">Your Top Kinks & Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insights.topKinks.map((kink, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-background/50 border border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{kink.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      kink.interest === 'high' ? 'bg-primary/20 text-primary' :
                      kink.interest === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {kink.interest === 'high' ? '🔥 High' : kink.interest === 'medium' ? '⭐ Medium' : '💭 Low'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{kink.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Hard Limits */}
        {insights.hardLimits && insights.hardLimits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 mb-6"
          >
            <h2 className="text-xl font-bold mb-3 text-red-400">Your Hard Limits</h2>
            <p className="text-sm text-muted-foreground mb-3">
              These are important boundaries that partners should respect:
            </p>
            <div className="flex flex-wrap gap-2">
              {insights.hardLimits.map((limit, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                  ⛔ {limit}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Key Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card/50 border border-border/50 rounded-2xl p-6 mb-6"
        >
          <h2 className="text-xl font-bold mb-4">Key Personality Traits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {insights.keyTraits.map((trait, index) => (
              <div key={index} className="flex gap-3 p-3 rounded-lg bg-background/50">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">{trait.trait}</h4>
                  <p className="text-sm text-muted-foreground">{trait.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ideal Partner */}
        {insights.idealPartner && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="bg-gradient-to-br from-primary/10 to-pink-500/10 border border-primary/20 rounded-2xl p-6 mb-6"
          >
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Your Ideal Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {insights.idealPartner}
            </p>
          </motion.div>
        )}

        {/* Compatibility Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card/50 border border-border/50 rounded-2xl p-6 mb-6"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Partner Compatibility Insights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {insights.compatibilityInsights}
          </p>
        </motion.div>

        {/* Growth Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="bg-card/50 border border-border/50 rounded-2xl p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Areas for Exploration & Growth</h2>
          <ul className="space-y-2">
            {insights.growthAreas.map((area, index) => (
              <li key={index} className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{area}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Ready to find your perfect match?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-gradient-to-r from-primary to-pink-600">
                Join SPICE Waitlist
                <Heart className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadImage}
              disabled={isDownloading}
            >
              <Download className="mr-2 w-4 h-4" />
              {isDownloading ? 'Downloading...' : 'Download Results'}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizResults;
