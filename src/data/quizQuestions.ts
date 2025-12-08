export interface QuizQuestionType {
  id: string;
  question: string;
  category: string;
  type: 'scale' | 'choice' | 'multi';
  options?: { value: string; label: string }[];
  scaleLabels?: { min: string; max: string };
}

export const quizQuestions: QuizQuestionType[] = [
  {
    id: 'dynamic_preference',
    question: 'In intimate situations, which role feels most natural to you?',
    category: 'Power Dynamics',
    type: 'choice',
    options: [
      { value: 'dominant', label: 'Taking control and leading' },
      { value: 'submissive', label: 'Following and surrendering' },
      { value: 'switch', label: 'Enjoying both roles equally' },
      { value: 'exploring', label: 'Still exploring what feels right' }
    ]
  },
  {
    id: 'control_comfort',
    question: 'How comfortable are you with giving up control to a trusted partner?',
    category: 'Trust & Surrender',
    type: 'scale',
    scaleLabels: { min: 'Very uncomfortable', max: 'Very comfortable' }
  },
  {
    id: 'communication_style',
    question: 'How do you prefer to communicate boundaries and desires?',
    category: 'Communication',
    type: 'choice',
    options: [
      { value: 'direct', label: 'Direct and explicit verbal communication' },
      { value: 'gradual', label: 'Gradual discussions over time' },
      { value: 'written', label: 'Written agreements and checklists' },
      { value: 'intuitive', label: 'Reading body language and signals' }
    ]
  },
  {
    id: 'intensity_preference',
    question: 'What level of intensity do you generally prefer?',
    category: 'Intensity',
    type: 'scale',
    scaleLabels: { min: 'Gentle & sensual', max: 'Intense & edgy' }
  },
  {
    id: 'bondage_interest',
    question: 'How interested are you in bondage and restraint play?',
    category: 'Kink Exploration',
    type: 'scale',
    scaleLabels: { min: 'Not interested', max: 'Very interested' }
  },
  {
    id: 'impact_interest',
    question: 'How do you feel about impact play (spanking, etc.)?',
    category: 'Kink Exploration',
    type: 'choice',
    options: [
      { value: 'giving', label: 'I enjoy giving' },
      { value: 'receiving', label: 'I enjoy receiving' },
      { value: 'both', label: 'I enjoy both' },
      { value: 'not_interested', label: 'Not for me' }
    ]
  },
  {
    id: 'roleplay_interest',
    question: 'How interested are you in power exchange and roleplay scenarios?',
    category: 'Fantasy',
    type: 'scale',
    scaleLabels: { min: 'Not interested', max: 'Very interested' }
  },
  {
    id: 'sensory_play',
    question: 'Which sensory experiences appeal to you most?',
    category: 'Sensory',
    type: 'choice',
    options: [
      { value: 'blindfolds', label: 'Blindfolds and sensory deprivation' },
      { value: 'temperature', label: 'Temperature play (ice, wax)' },
      { value: 'texture', label: 'Different textures and materials' },
      { value: 'all', label: 'All of the above' },
      { value: 'none', label: 'None of these' }
    ]
  },
  {
    id: 'aftercare_needs',
    question: 'How important is aftercare (cuddling, reassurance, care after play)?',
    category: 'Emotional Connection',
    type: 'scale',
    scaleLabels: { min: 'Not important', max: 'Essential' }
  },
  {
    id: 'experience_level',
    question: 'How would you describe your experience with BDSM?',
    category: 'Experience',
    type: 'choice',
    options: [
      { value: 'curious', label: 'Curious beginner' },
      { value: 'some', label: 'Some experience' },
      { value: 'experienced', label: 'Experienced practitioner' },
      { value: 'veteran', label: 'Veteran with years of experience' }
    ]
  },
  {
    id: 'protocol_interest',
    question: 'How interested are you in formal protocols and rituals?',
    category: 'Structure',
    type: 'scale',
    scaleLabels: { min: 'Prefer casual', max: 'Love structure' }
  },
  {
    id: 'public_private',
    question: 'Do you prefer to keep your dynamic completely private or incorporate subtle elements in daily life?',
    category: 'Lifestyle',
    type: 'choice',
    options: [
      { value: 'private', label: 'Strictly private/bedroom only' },
      { value: 'subtle', label: 'Subtle elements in daily life' },
      { value: 'lifestyle', label: 'Full lifestyle integration' },
      { value: 'unsure', label: 'Not sure yet' }
    ]
  },
  {
    id: 'emotional_connection',
    question: 'How important is emotional connection in power exchange?',
    category: 'Emotional Connection',
    type: 'scale',
    scaleLabels: { min: 'Can be casual', max: 'Deep connection required' }
  },
  {
    id: 'exploration_pace',
    question: 'What pace of exploration feels right for you?',
    category: 'Growth',
    type: 'choice',
    options: [
      { value: 'slow', label: 'Slow and steady' },
      { value: 'moderate', label: 'Moderate - trying new things regularly' },
      { value: 'adventurous', label: 'Adventurous - eager to explore' },
      { value: 'settled', label: 'I know what I like' }
    ]
  },
  {
    id: 'partner_compatibility',
    question: 'What\'s most important to you in a BDSM-compatible partner?',
    category: 'Compatibility',
    type: 'choice',
    options: [
      { value: 'trust', label: 'Trust and emotional safety' },
      { value: 'experience', label: 'Experience and skill' },
      { value: 'openness', label: 'Openness to exploration' },
      { value: 'communication', label: 'Strong communication' }
    ]
  }
];
