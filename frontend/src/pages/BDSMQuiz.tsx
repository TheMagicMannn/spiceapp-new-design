import React, { useState, useEffect } from 'react';
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
import { trackQuizStart, trackQuizComplete, trackQuizProgress } from '@/lib/gtag';

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

  // Track quiz start when quiz is started
  useEffect(() => {
    if (quizStarted && currentQuestion === 0 && responses.length === 0) {
      trackQuizStart();
    }
  }, [quizStarted]);

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
      // Call Supabase Edge Function for AI analysis
      const { data, error } = await supabase.functions.invoke('analyze-bdsm-quiz', {
        body: { responses }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (data?.success && data?.insights) {
        setInsights(data.insights);
        
        toast({
          title: "Analysis Complete!",
          description: "Your personalized insights are ready.",
        });
      } else {
        throw new Error('Invalid response from analysis service');
      }
    } catch (error) {
      console.error('Quiz analysis error:', error);
      
      // Fallback to local analysis
      toast({
        title: "Using Local Analysis",
        description: "AI analysis unavailable, using local processing.",
      });
      
      const mockInsights = generateMockInsights(responses);
      setInsights(mockInsights);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const generateMockInsights = (responses: QuizResponse[]): QuizInsights => {
    // Helper to get answer
    const getAnswer = (questionId: string) => {
      return responses.find(r => r.questionId === questionId)?.answer;
    };

    // =====================================================
    // LIFESTYLE ANALYSIS
    // =====================================================
    const relationshipStructure = getAnswer('relationship_structure') as string;
    const enmComfort = getAnswer('non_monogamy_interest') as number || 50;
    const groupPlayInterest = getAnswer('group_play') as string;
    const communityInvolvement = getAnswer('kink_community') as string;
    const lifestyleIntegration = getAnswer('lifestyle_integration') as string;
    
    const lifestyleMap: Record<string, string> = {
      'monogamous': 'Monogamous',
      'open': 'Open Relationship',
      'polyamorous': 'Polyamorous',
      'swinger': 'Swinger Lifestyle',
      'relationship_anarchy': 'Relationship Anarchist',
      'exploring': 'Exploring Relationship Styles'
    };

    const lifestyleSecondary: string[] = [];
    if (enmComfort > 60 && relationshipStructure === 'monogamous') {
      lifestyleSecondary.push('Open to ENM');
    }
    if (groupPlayInterest === 'regular' || groupPlayInterest === 'prefer') {
      lifestyleSecondary.push('Group Play Enthusiast');
    }
    if (communityInvolvement === 'active' || communityInvolvement === 'organizer') {
      lifestyleSecondary.push('Community Active');
    }
    if (lifestyleIntegration === 'full_247' || lifestyleIntegration === 'subtle_247') {
      lifestyleSecondary.push('24/7 Dynamic');
    }

    const lifestyleDescription = `You identify as ${lifestyleMap[relationshipStructure]?.toLowerCase() || 'exploring'} with ${
      enmComfort > 70 ? 'strong enthusiasm for' : enmComfort > 50 ? 'openness to' : enmComfort > 30 ? 'curiosity about' : 'preference against'
    } ethical non-monogamy. ${
      lifestyleIntegration === 'full_247' ? 'You seek full 24/7 power exchange integration.' :
      lifestyleIntegration === 'subtle_247' ? 'You prefer subtle D/s elements in daily life.' :
      lifestyleIntegration === 'bedroom_only' ? 'You keep kink separate in the bedroom.' :
      'You take a flexible approach to kink integration.'
    }`;

    // =====================================================
    // BDSM ROLE ANALYSIS
    // =====================================================
    const primaryRole = getAnswer('primary_role') as string;
    const domStyles = (getAnswer('dominance_style') as string[] || []).filter(s => s !== 'not_applicable');
    const subStyles = (getAnswer('submission_style') as string[] || []).filter(s => s !== 'not_applicable');
    const switchPref = getAnswer('switch_preference') as string;
    const controlComfort = getAnswer('control_comfort') as number || 50;
    const takingControl = getAnswer('taking_control') as number || 50;
    const powerExchange = getAnswer('power_exchange_level') as string;
    
    const roleMap: Record<string, string> = {
      'dominant': 'Dominant',
      'submissive': 'Submissive',
      'switch': 'Switch',
      'top': 'Top',
      'bottom': 'Bottom',
      'master_mistress': 'Master/Mistress',
      'slave': 'Slave',
      'brat': 'Brat',
      'primal': 'Primal',
      'sadist': 'Sadist',
      'masochist': 'Masochist',
      'exploring': 'Exploring My Role'
    };

    // Calculate dominance score from multiple factors
    let dominanceScore = 50;
    
    // Primary role influence (40% weight)
    if (primaryRole === 'dominant' || primaryRole === 'master_mistress' || primaryRole === 'top' || primaryRole === 'sadist') {
      dominanceScore += 30;
    } else if (primaryRole === 'submissive' || primaryRole === 'slave' || primaryRole === 'bottom' || primaryRole === 'masochist') {
      dominanceScore -= 30;
    } else if (primaryRole === 'brat') {
      dominanceScore -= 15;
    } else if (primaryRole === 'primal') {
      dominanceScore += (takingControl - 50) / 5;
    }
    
    // Control comfort influence (30% weight)
    if (takingControl > controlComfort) {
      dominanceScore += (takingControl - controlComfort) / 3;
    } else {
      dominanceScore -= (controlComfort - takingControl) / 3;
    }
    
    // Power exchange level influence (20% weight)
    if (powerExchange === 'equal') dominanceScore = 50;
    else if (powerExchange === 'total_authority') dominanceScore += 10;
    
    // Switch preference adjustment (10% weight)
    if (switchPref === 'lean_dominant') dominanceScore += 10;
    else if (switchPref === 'lean_submissive') dominanceScore -= 10;
    else if (switchPref === 'equal') dominanceScore = 50;
    
    // Normalize to 0-100
    dominanceScore = Math.max(0, Math.min(100, dominanceScore));

    // Determine style based on selections and other factors
    const activeStyles = [...domStyles, ...subStyles];
    const styleLabels = activeStyles.map(s => 
      s.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    );

    // Determine secondary roles
    const secondaryRoles: string[] = [];
    if (primaryRole === 'switch') {
      if (switchPref === 'lean_dominant') secondaryRoles.push('Dominant-leaning');
      if (switchPref === 'lean_submissive') secondaryRoles.push('Submissive-leaning');
    }
    if (primaryRole === 'dominant' && subStyles.length > 0) {
      secondaryRoles.push('Switch potential');
    }
    if (primaryRole === 'submissive' && domStyles.length > 0) {
      secondaryRoles.push('Switch potential');
    }

    const roleDescription = `As a ${roleMap[primaryRole]?.toLowerCase() || 'person exploring their role'}, you ${
      dominanceScore > 70 ? 'strongly identify with taking control and leading in scenes' :
      dominanceScore < 30 ? 'deeply enjoy surrender and following your partner\'s lead' :
      'appreciate both giving and receiving control depending on the dynamic'
    }. ${styleLabels.length > 0 ? `Your style leans ${styleLabels.slice(0, 3).join(', ')}.` : 'You\'re still discovering your specific style.'} ${
      powerExchange === 'full_247' ? 'You seek total power exchange in a 24/7 dynamic.' :
      powerExchange === 'total_authority' ? 'You desire complete authority transfer.' :
      powerExchange === 'scene_only' ? 'You prefer power exchange limited to scenes.' :
      'Your preferred level of power exchange varies.'
    }`;
    
    // =====================================================
    // KINK INTEREST ANALYSIS
    // =====================================================
    const topKinks: QuizInsights['topKinks'] = [];
    
    // Analyze all kink interest levels
    const kinkScores = [
      { id: 'bondage_interest', name: 'Bondage & Restraint', types: getAnswer('bondage_types') as string[] || [] },
      { id: 'impact_play_interest', name: 'Impact Play', types: getAnswer('impact_types') as string[] || [] },
      { id: 'sensory_play_interest', name: 'Sensory Play', types: getAnswer('sensory_types') as string[] || [] },
      { id: 'humiliation_interest', name: 'Humiliation & Degradation', types: getAnswer('humiliation_types') as string[] || [] },
      { id: 'orgasm_control', name: 'Orgasm Control & Denial', types: [] },
      { id: 'anal_play', name: 'Anal Play', types: [] }
    ];

    kinkScores.forEach(kink => {
      const interest = getAnswer(kink.id) as number;
      if (interest && interest > 40) {
        const specificTypes = kink.types.filter(t => t !== 'none' && t !== 'not_interested').length;
        const detailDesc = specificTypes > 0 ? ` including ${specificTypes} specific interests` : '';
        
        topKinks.push({
          name: kink.name,
          interest: interest > 75 ? 'high' : interest > 60 ? 'medium' : 'low',
          description: `Interest level: ${interest}%${detailDesc}`
        });
      }
    });

    // Roleplay interests
    const roleplayScenarios = (getAnswer('roleplay_scenarios') as string[] || []).filter(s => s !== 'none');
    if (roleplayScenarios.length > 0) {
      topKinks.push({
        name: 'Roleplay & Fantasy',
        interest: roleplayScenarios.length > 3 ? 'high' : 'medium',
        description: `Interested in ${roleplayScenarios.length} scenario types`
      });
    }

    // Chastity interest
    const chastity = getAnswer('chastity') as string;
    if (chastity && chastity !== 'not_interested') {
      topKinks.push({
        name: 'Chastity & Long-term Denial',
        interest: chastity === 'permanent' || chastity === 'long_term' ? 'high' : 'medium',
        description: `Interested in ${chastity.replace(/_/g, ' ')} chastity`
      });
    }

    // Exhibitionism
    const exhibitionism = getAnswer('exhibitionism') as string;
    if (exhibitionism && exhibitionism !== 'private_only') {
      topKinks.push({
        name: 'Exhibitionism/Voyeurism',
        interest: exhibitionism === 'public' ? 'high' : 'medium',
        description: `Preferences: ${exhibitionism.replace(/_/g, ' ')}`
      });
    }

    // Edge play
    const edgePlay = getAnswer('edge_play_interest') as string;
    if (edgePlay === 'experienced' || edgePlay === 'seek') {
      topKinks.push({
        name: 'Edge Play',
        interest: edgePlay === 'seek' ? 'high' : 'medium',
        description: 'Breath play, knife play, and high-risk activities'
      });
    }

    // Sort by interest level
    topKinks.sort((a, b) => {
      const order = { high: 3, medium: 2, low: 1 };
      return order[b.interest] - order[a.interest];
    });

    // =====================================================
    // HARD LIMITS ANALYSIS
    // =====================================================
    const hardLimits: string[] = [];
    
    // From low interest scores
    if ((getAnswer('bondage_interest') as number || 50) < 20) hardLimits.push('Bondage/Restraint');
    if ((getAnswer('impact_play_interest') as number || 50) < 20) hardLimits.push('Impact Play');
    if ((getAnswer('humiliation_interest') as number || 50) < 20) hardLimits.push('Humiliation');
    if ((getAnswer('anal_play') as number || 50) < 20) hardLimits.push('Anal Play');
    
    // From explicit rejections
    if (edgePlay === 'hard_limit') hardLimits.push('Edge Play (Breath/Blood/Knife)');
    
    const fluidsComfort = getAnswer('fluids') as string;
    if (fluidsComfort === 'hard_limit') hardLimits.push('Bodily Fluids Beyond Natural');
    
    // From deal breakers
    const dealBreakers = (getAnswer('deal_breakers') as string[] || []).filter(db => db !== 'none');
    dealBreakers.forEach(db => {
      const label = db.replace(/_/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      if (!hardLimits.includes(label)) hardLimits.push(label);
    });

    // =====================================================
    // COMPATIBILITY & PERSONALITY ANALYSIS
    // =====================================================
    const expLevel = getAnswer('experience_level') as string;
    const expMap: Record<string, string> = {
      'fantasy_only': 'Fantasy Only',
      'curious': 'Curious Beginner',
      'novice': 'Novice',
      'intermediate': 'Intermediate',
      'experienced': 'Experienced Practitioner',
      'expert': 'Expert/Educator'
    };

    const intensityPref = getAnswer('intensity_preference') as number || 50;
    const painRelation = getAnswer('pain_pleasure') as string;
    const emotionalConnection = getAnswer('emotional_connection') as string;
    const aftercareImportance = getAnswer('aftercare_needs') as number || 50;
    const communicationStyles = (getAnswer('communication_style') as string[] || []);
    const explorationPace = getAnswer('exploration_pace') as string;
    const genderPreference = getAnswer('gender_preference') as string;
    const jealousyCompersion = getAnswer('jealousy_compersion') as string;
    const riskTolerance = getAnswer('risk_tolerance') as string;

    // Calculate openness to exploration
    const opennessFactors = [
      intensityPref,
      explorationPace === 'adventurous' ? 90 : explorationPace === 'moderate' ? 70 : explorationPace === 'slow' ? 40 : 60,
      topKinks.length * 10,
      riskTolerance === 'extreme' ? 90 : riskTolerance === 'edge' ? 75 : riskTolerance === 'moderate' ? 50 : 30
    ];
    const opennessScore = Math.min(100, opennessFactors.reduce((a, b) => a + b, 0) / opennessFactors.length);

    // Generate personality traits
    const keyTraits = [
      {
        trait: roleMap[primaryRole] || 'Explorer',
        description: dominanceScore > 70 ? 'You thrive in leadership and control, guiding scenes with confidence' :
                    dominanceScore < 30 ? 'You find deep fulfillment in surrender and serving your partner\'s desires' :
                    'You enjoy the fluidity of both giving and receiving control'
      },
      {
        trait: intensityPref > 70 ? 'Intensity Seeker' : intensityPref < 30 ? 'Sensual Explorer' : 'Balanced Intensity',
        description: intensityPref > 70 ? 'You crave intense, edgy experiences that push boundaries' :
                    intensityPref < 30 ? 'You prefer gentle, sensual connections and gradual buildup' :
                    'You appreciate a range from gentle sensuality to moderate intensity'
      },
      {
        trait: expMap[expLevel] || 'Curious Beginner',
        description: expLevel === 'expert' ? 'Extensive experience and knowledge in the lifestyle' :
                    expLevel === 'experienced' ? 'Well-versed in kink practices with years of experience' :
                    expLevel === 'intermediate' ? 'Growing experience with regular practice' :
                    expLevel === 'novice' ? 'Some hands-on experience, building skills' :
                    expLevel === 'curious' ? 'New to the lifestyle, eager to explore' :
                    'Exploring fantasies and learning about kink'
      }
    ];

    if (aftercareImportance > 75) {
      keyTraits.push({
        trait: 'Aftercare Focused',
        description: 'You prioritize emotional processing and care after intense scenes'
      });
    }

    if (communicationStyles.length > 3) {
      keyTraits.push({
        trait: 'Multi-Modal Communicator',
        description: 'You excel at using various communication methods to express boundaries and desires'
      });
    }

    // Generate growth areas based on responses
    const growthAreas: string[] = [];
    
    if (expLevel === 'fantasy_only' || expLevel === 'curious') {
      growthAreas.push('Connect with the kink community through munches and educational events');
      growthAreas.push('Start with beginner-friendly activities and build trust with partners');
    }
    
    if (explorationPace === 'very_slow' || explorationPace === 'slow') {
      growthAreas.push('Take time to build trust and comfort before trying new activities');
    } else if (explorationPace === 'adventurous') {
      growthAreas.push('Balance enthusiasm with safety - research thoroughly before trying edge play');
    }

    if (topKinks.length > 0) {
      growthAreas.push(`Deepen your exploration of ${topKinks[0].name.toLowerCase()}`);
    }

    if (communicationStyles.length < 2) {
      growthAreas.push('Develop multiple communication methods for expressing needs and boundaries');
    }

    if (aftercareImportance < 40) {
      growthAreas.push('Learn about the importance of aftercare for emotional wellbeing');
    }

    growthAreas.push('Continue education through workshops, books, and community learning');
    growthAreas.push('Practice negotiation and consent conversations with potential partners');

    return {
      personalitySummary: `You identify as ${roleMap[primaryRole] || 'exploring your role'} with ${expMap[expLevel]?.toLowerCase() || 'emerging'} experience in BDSM and kink. ${
        topKinks.length > 0 ? `Your primary interests include ${topKinks.slice(0, 3).map(k => k.name.toLowerCase()).join(', ')}.` : 'You\'re exploring various kinks to discover your interests.'
      } You prefer ${lifestyleMap[relationshipStructure]?.toLowerCase() || 'exploring'} relationship structures and ${
        intensityPref > 70 ? 'crave intense, boundary-pushing experiences' :
        intensityPref < 30 ? 'enjoy gentle, sensual explorations' :
        'appreciate a balanced range of intensity levels'
      }. ${
        emotionalConnection === 'essential' || emotionalConnection === 'romantic' ? 'Deep emotional connection is essential for your kink experiences.' :
        emotionalConnection === 'unnecessary' ? 'You can separate kink from emotional connection.' :
        'You value emotional connection but can be flexible.'
      }`,
      
      keyTraits: keyTraits.slice(0, 4),
      
      compatibilityInsights: `Based on your comprehensive profile, you'd thrive with partners who ${
        dominanceScore > 70 ? 'naturally submit and seek structure, enjoying your authoritative energy' :
        dominanceScore < 30 ? 'confidently take control and provide the guidance you crave' :
        'can switch dynamics with you, matching your versatile energy'
      }. Your ${lifestyleMap[relationshipStructure]?.toLowerCase() || 'relationship'} approach means ${
        relationshipStructure === 'monogamous' ? 'you value exclusive, deep connection with a single partner' :
        relationshipStructure === 'polyamorous' ? 'you can love multiple people simultaneously with honesty' :
        relationshipStructure === 'open' ? 'you separate emotional and sexual connections thoughtfully' :
        relationshipStructure === 'swinger' ? 'you enjoy shared sexual experiences as a couple' :
        'you take a flexible, individual approach to relationships'
      }. ${
        jealousyCompersion === 'compersion' || jealousyCompersion === 'encourage' ? 'You feel compersion, taking joy in your partner\'s pleasure with others.' :
        jealousyCompersion === 'monogamous' ? 'You prefer complete monogamy and exclusivity.' :
        'You navigate jealousy and sharing with clear communication.'
      } Ideal partners share your ${intensityPref > 60 ? 'appetite for intensity' : 'preference for sensuality'}, respect your ${hardLimits.length} hard limits, and match your ${
        explorationPace === 'very_slow' ? 'patient, gradual' :
        explorationPace === 'adventurous' ? 'eager, adventurous' :
        'moderate'
      } pace of exploration.`,
      
      growthAreas: growthAreas.slice(0, 6),
      
      scores: {
        dominanceSubmission: Math.round(dominanceScore),
        communicationStyle: communicationStyles.length > 2 ? 'Multi-Modal Communicator' : communicationStyles.includes('verbal_direct') ? 'Direct Verbal' : 'Developing Style',
        experienceLevel: expMap[expLevel] || 'Exploring',
        opennessToExploration: Math.round(opennessScore)
      },
      
      archetype: `${roleMap[primaryRole] || 'Explorer'}${styleLabels.length > 0 ? ' - ' + styleLabels[0] : ''}`,
      
      lifestyle: {
        primary: lifestyleMap[relationshipStructure] || 'Exploring',
        secondary: lifestyleSecondary,
        description: lifestyleDescription
      },
      
      bdsmRole: {
        primary: roleMap[primaryRole] || 'Exploring',
        secondary: secondaryRoles,
        style: styleLabels.slice(0, 4),
        description: roleDescription
      },
      
      topKinks: topKinks.length > 0 ? topKinks.slice(0, 8) : [
        {
          name: 'Still Exploring',
          interest: 'medium',
          description: 'Take time to discover what excites you through education and gradual exploration'
        }
      ],
      
      hardLimits: hardLimits.length > 0 ? hardLimits : ['No major limits identified - communicate boundaries with partners'],
      
      idealPartner: `Your ideal partner ${
        dominanceScore > 70 ? 'is naturally submissive, craving your structure and control' :
        dominanceScore > 55 ? 'leans submissive but appreciates your flexibility' :
        dominanceScore < 30 ? 'is a confident, experienced dominant who provides clear leadership' :
        dominanceScore < 45 ? 'leans dominant but appreciates your input' :
        'shares your switch nature, enjoying both roles with equal enthusiasm'
      }. They ${
        relationshipStructure === 'monogamous' ? 'are committed to monogamy and building deep exclusive intimacy' :
        relationshipStructure === 'polyamorous' ? 'embrace polyamory and managing multiple loving relationships' :
        relationshipStructure === 'open' ? 'appreciate the distinction between sex and romance in open dynamics' :
        relationshipStructure === 'swinger' ? 'enjoy the swinger lifestyle and shared recreational experiences' :
        'are open to exploring various relationship structures together'
      }. ${
        emotionalConnection === 'essential' || emotionalConnection === 'romantic' ? 'Deep emotional and romantic connection is essential to them.' :
        emotionalConnection === 'unnecessary' ? 'They can keep kink and emotion separate.' :
        'They value connection but maintain healthy boundaries.'
      } They're ${
        expLevel === 'expert' || expLevel === 'experienced' ? 'experienced practitioners who match your expertise' :
        expLevel === 'intermediate' ? 'established in the lifestyle with solid experience' :
        expLevel === 'novice' || expLevel === 'curious' ? 'patient educators or fellow learners growing together' :
        'experienced enough to guide your exploration safely'
      }, share enthusiasm for ${topKinks[0]?.name.toLowerCase() || 'exploration'}, absolutely respect your hard limits around ${hardLimits[0]?.toLowerCase() || 'boundaries'}, and ${
        aftercareImportance > 70 ? 'prioritize thorough aftercare' :
        aftercareImportance < 30 ? 'are comfortable with minimal aftercare' :
        'provide balanced aftercare'
      }.`
    };
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setResponses([]);
    setInsights(null);
    setQuizStarted(false);
  };

  if (insights) {
    return <QuizResults insights={insights} onRestart={restartQuiz} responses={responses} />;
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
              disabled={
                getCurrentAnswer() === undefined || 
                (Array.isArray(getCurrentAnswer()) && (getCurrentAnswer() as string[]).length === 0)
              }
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
