import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Sparkles, Heart, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import QuizResults from '@/components/quiz/QuizResults';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import { quizQuestions } from '@/data/quizQuestions';
import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header';

export interface QuizResponse {
  questionId: string;
  answer: string | number | string[];
}

export interface QuizInsights {
  personalitySummary: string;
  keyTraits: { trait: string; description: string }[];
  compatibilityInsights: string;
  growthAreas: string[];
  scores: {
    dominanceSubmission: number;
    communicationStyle: string;
    experienceLevel: string;
    opennessToExploration: number;
  };
  archetype: string;
  lifestyle: {
    primary: string;
    secondary: string[];
    description: string;
  };
  bdsmRole: {
    primary: string;
    secondary: string[];
    style: string[];
    description: string;
  };
  topKinks: {
    name: string;
    interest: 'high' | 'medium' | 'low';
    description: string;
  }[];
  hardLimits: string[];
  idealPartner: string;
}

const BDSMQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [insights, setInsights] = useState<QuizInsights | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const { toast } = useToast();

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (answer: string | number | string[]) => {
    const newResponses = [...responses];
    const existingIndex = newResponses.findIndex(
      r => r.questionId === quizQuestions[currentQuestion].id
    );
    
    if (existingIndex >= 0) {
      newResponses[existingIndex].answer = answer;
    } else {
      newResponses.push({
        questionId: quizQuestions[currentQuestion].id,
        answer
      });
    }
    
    setResponses(newResponses);
  };

  const getCurrentAnswer = () => {
    const response = responses.find(
      r => r.questionId === quizQuestions[currentQuestion].id
    );
    return response?.answer;
  };

  const goNext = async () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      await analyzeQuiz();
    }
  };

  const goPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const analyzeQuiz = async () => {
    setIsAnalyzing(true);
    
    try {
      // Format responses for AI analysis
      const formattedResponses = responses.map(r => {
        const question = quizQuestions.find(q => q.id === r.questionId);
        return {
          question: question?.question,
          category: question?.category,
          answer: r.answer
        };
      });

      const { data, error } = await supabase.functions.invoke('analyze-bdsm-quiz', {
        body: { responses: formattedResponses }
      });

      if (error) throw error;

      setInsights(data.insights);

      // Save results to database
      await supabase.from('bdsm_quiz_results').insert({
        responses: formattedResponses,
        ai_insights: JSON.stringify(data.insights),
        compatibility_profile: data.insights.scores
      });

      toast({
        title: "Analysis Complete!",
        description: "Your personalized insights are ready.",
      });
    } catch (error) {
      console.error('Quiz analysis error:', error);
      toast({
        title: "Analysis Error",
        description: "We couldn't analyze your responses. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setResponses([]);
    setInsights(null);
    setQuizStarted(false);
  };

  if (insights) {
    return <QuizResults insights={insights} onRestart={restartQuiz} />;
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>BDSM Compatibility Quiz — Discover Your Intimacy Style | SPICE</title>
          <meta name="description" content="Take our AI-powered BDSM compatibility quiz to discover your intimacy style, preferences, and find compatible partners. Safe, private, and non-judgmental." />
          <link rel="canonical" href="https://thespiceapp.com/quiz" />
        </Helmet>
        <Header />
        <Breadcrumbs />
        <div className="pt-32 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full text-center"
          >
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-pink-500 to-purple-500 bg-clip-text text-transparent">
                BDSM Compatibility Quiz
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover your intimacy style and preferences through our AI-powered analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card/50 border border-border/50 rounded-xl p-4">
                <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Personalized Insights</h3>
                <p className="text-sm text-muted-foreground">AI-generated analysis tailored to you</p>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-xl p-4">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Safe & Private</h3>
                <p className="text-sm text-muted-foreground">Your responses are anonymous</p>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-xl p-4">
                <Lock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Non-Judgmental</h3>
                <p className="text-sm text-muted-foreground">Sex-positive and inclusive</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              {quizQuestions.length} questions • Takes about 5 minutes
            </p>

            <Button
              onClick={() => setQuizStarted(true)}
              size="lg"
              className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90"
            >
              Start Quiz
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Breadcrumbs />
      {/* Header with progress */}
      <div className="sticky top-16 bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 z-10 mt-28">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            {isAnalyzing ? (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6 animate-pulse">
                  <Sparkles className="w-8 h-8 text-primary animate-spin" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Analyzing Your Responses...</h2>
                <p className="text-muted-foreground">
                  Our AI is creating your personalized compatibility profile
                </p>
              </motion.div>
            ) : (
              <QuizQuestion
                key={currentQuestion}
                question={quizQuestions[currentQuestion]}
                currentAnswer={getCurrentAnswer()}
                onAnswer={handleAnswer}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation footer */}
      {!isAnalyzing && (
        <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border/50 p-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={goPrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Previous
            </Button>

            <Button
              onClick={goNext}
              disabled={getCurrentAnswer() === undefined}
              className="bg-gradient-to-r from-primary to-pink-600"
            >
              {currentQuestion === quizQuestions.length - 1 ? (
                <>
                  Get Results
                  <Sparkles className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BDSMQuiz;
