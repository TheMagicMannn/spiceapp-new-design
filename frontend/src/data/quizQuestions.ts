export interface QuizQuestionType {
  id: string;
  question: string;
  category: string;
  type: 'scale' | 'choice' | 'multi';
  options?: { value: string; label: string }[];
  scaleLabels?: { min: string; max: string };
  section?: 'lifestyle' | 'role' | 'kinks' | 'dynamics' | 'compatibility';
}

export const quizQuestions: QuizQuestionType[] = [
  // ============================================
  // SECTION 1: LIFESTYLE & RELATIONSHIP STRUCTURE
  // ============================================
  {
    id: 'relationship_structure',
    question: 'What relationship structure appeals to you most?',
    category: 'Lifestyle',
    section: 'lifestyle',
    type: 'choice',
    options: [
      { value: 'monogamous', label: 'Monogamous - Exclusive partnership' },
      { value: 'open', label: 'Open relationship - Sexual freedom with emotional commitment' },
      { value: 'polyamorous', label: 'Polyamorous - Multiple romantic relationships' },
      { value: 'swinger', label: 'Swinging - Recreational sex with other couples' },
      { value: 'relationship_anarchy', label: 'Relationship Anarchy - Fluid, non-hierarchical' },
      { value: 'exploring', label: 'Still exploring what works for me' }
    ]
  },
  {
    id: 'non_monogamy_interest',
    question: 'How comfortable are you with ethical non-monogamy (ENM)?',
    category: 'Lifestyle',
    section: 'lifestyle',
    type: 'scale',
    scaleLabels: { min: 'Prefer monogamy', max: 'Enthusiastic about ENM' }
  },
  {
    id: 'group_play',
    question: 'What\'s your interest level in group activities (threesomes, orgies, play parties)?',
    category: 'Lifestyle',
    section: 'lifestyle',
    type: 'choice',
    options: [
      { value: 'not_interested', label: 'Not interested' },
      { value: 'curious', label: 'Curious, might try' },
      { value: 'occasional', label: 'Enjoy occasionally' },
      { value: 'regular', label: 'Regular part of my lifestyle' },
      { value: 'prefer', label: 'Strongly prefer group dynamics' }
    ]
  },
  {
    id: 'kink_community',
    question: 'How involved do you want to be in the kink/BDSM community?',
    category: 'Lifestyle',
    section: 'lifestyle',
    type: 'choice',
    options: [
      { value: 'private', label: 'Keep it completely private' },
      { value: 'online', label: 'Online communities only' },
      { value: 'occasional', label: 'Attend events occasionally' },
      { value: 'active', label: 'Active community member' },
      { value: 'organizer', label: 'Want to organize/lead in community' }
    ]
  },
  {
    id: 'lifestyle_integration',
    question: 'How much do you want BDSM integrated into your daily life?',
    category: 'Lifestyle',
    section: 'lifestyle',
    type: 'choice',
    options: [
      { value: 'bedroom_only', label: 'Bedroom only - completely separate from daily life' },
      { value: 'occasional', label: 'Occasional play sessions' },
      { value: 'subtle_247', label: 'Subtle 24/7 with protocols' },
      { value: 'full_247', label: 'Full 24/7 power exchange' },
      { value: 'flexible', label: 'Flexible - varies by mood/situation' }
    ]
  },

  // ============================================
  // SECTION 2: BDSM ROLES & POWER DYNAMICS
  // ============================================
  {
    id: 'primary_role',
    question: 'Which BDSM role resonates most with you?',
    category: 'Role Identity',
    section: 'role',
    type: 'choice',
    options: [
      { value: 'dominant', label: 'Dominant/Dom/Domme - I lead and control' },
      { value: 'submissive', label: 'Submissive/Sub - I surrender and serve' },
      { value: 'switch', label: 'Switch - I enjoy both dominant and submissive roles' },
      { value: 'top', label: 'Top - I give sensation/action (not power exchange focused)' },
      { value: 'bottom', label: 'Bottom - I receive sensation/action' },
      { value: 'master_mistress', label: 'Master/Mistress - Authority-focused dominance' },
      { value: 'slave', label: 'Slave - Total power exchange and service' },
      { value: 'brat', label: 'Brat - Playful resistance and teasing' },
      { value: 'primal', label: 'Primal - Instinct-driven, animalistic energy' },
      { value: 'sadist', label: 'Sadist - I enjoy giving pain/intensity' },
      { value: 'masochist', label: 'Masochist - I enjoy receiving pain/intensity' },
      { value: 'exploring', label: 'Still exploring my role' }
    ]
  },
  {
    id: 'dominance_style',
    question: 'If you identify as Dominant/Top, which style appeals to you most?',
    category: 'Role Identity',
    section: 'role',
    type: 'multi',
    options: [
      { value: 'strict', label: 'Strict - Rules, discipline, structure' },
      { value: 'sensual', label: 'Sensual - Pleasure-focused, teasing' },
      { value: 'sadistic', label: 'Sadistic - Pain and intensity' },
      { value: 'nurturing', label: 'Nurturing - Caregiver, protective' },
      { value: 'degrading', label: 'Degrading - Humiliation, objectification' },
      { value: 'primal', label: 'Primal - Raw, instinctual, animalistic' },
      { value: 'owner', label: 'Owner - Possession, control, authority' },
      { value: 'not_applicable', label: 'Not applicable to me' }
    ]
  },
  {
    id: 'submission_style',
    question: 'If you identify as Submissive/Bottom, which style appeals to you most?',
    category: 'Role Identity',
    section: 'role',
    type: 'multi',
    options: [
      { value: 'obedient', label: 'Obedient - Eager to please and follow rules' },
      { value: 'brat', label: 'Brat - Playful resistance, testing boundaries' },
      { value: 'masochistic', label: 'Masochistic - Craving pain and intensity' },
      { value: 'service', label: 'Service-oriented - Acts of service and care' },
      { value: 'pet', label: 'Pet/Kitten/Puppy - Animal persona play' },
      { value: 'little', label: 'Little/Middle - Age regression play' },
      { value: 'rope_bunny', label: 'Rope bunny - Love being tied up' },
      { value: 'slave', label: 'Slave - Total power exchange' },
      { value: 'not_applicable', label: 'Not applicable to me' }
    ]
  },
  {
    id: 'switch_preference',
    question: 'If you\'re a Switch, do you have a preference?',
    category: 'Role Identity',
    section: 'role',
    type: 'choice',
    options: [
      { value: 'lean_dominant', label: 'Lean dominant but enjoy submitting sometimes' },
      { value: 'lean_submissive', label: 'Lean submissive but enjoy dominating sometimes' },
      { value: 'equal', label: 'Equal interest in both roles' },
      { value: 'partner_dependent', label: 'Depends on my partner\'s energy' },
      { value: 'not_switch', label: 'I\'m not a switch' }
    ]
  },
  {
    id: 'power_exchange_level',
    question: 'What level of power exchange interests you?',
    category: 'Power Dynamics',
    section: 'dynamics',
    type: 'choice',
    options: [
      { value: 'scene_only', label: 'Scene only - Power exchange during play sessions' },
      { value: 'bedroom', label: 'Bedroom - Extended to all intimate time' },
      { value: 'partial_247', label: 'Partial 24/7 - Some aspects outside bedroom' },
      { value: 'full_247', label: 'Full 24/7 - Constant power exchange' },
      { value: 'total_authority', label: 'Total authority transfer (Master/slave dynamic)' },
      { value: 'equal', label: 'No power exchange - Equal partners who enjoy kink' }
    ]
  },

  // ============================================
  // SECTION 3: SPECIFIC KINKS & ACTIVITIES
  // ============================================
  {
    id: 'bondage_interest',
    question: 'How interested are you in bondage and restraint?',
    category: 'Kinks',
    section: 'kinks',
    type: 'scale',
    scaleLabels: { min: 'Not interested', max: 'Major interest' }
  },
  {
    id: 'bondage_types',
    question: 'Which types of bondage interest you?',
    category: 'Kinks',
    section: 'kinks',
    type: 'multi',
    options: [
      { value: 'rope', label: 'Rope bondage/Shibari' },
      { value: 'cuffs', label: 'Cuffs and restraints' },
      { value: 'tape', label: 'Tape bondage' },
      { value: 'furniture', label: 'Bondage furniture' },
      { value: 'mummification', label: 'Mummification' },
      { value: 'predicament', label: 'Predicament bondage' },
      { value: 'self', label: 'Self-bondage' },
      { value: 'none', label: 'None interest me' }
    ]
  },
  {
    id: 'impact_play_interest',
    question: 'Rate your interest in impact play (spanking, flogging, etc.)',
    category: 'Kinks',
    section: 'kinks',
    type: 'scale',
    scaleLabels: { min: 'Not interested', max: 'Major interest' }
  },
  {
    id: 'impact_types',
    question: 'Which impact play activities interest you?',
    category: 'Kinks',
    section: 'kinks',
    type: 'multi',
    options: [
      { value: 'spanking_hand', label: 'Spanking (hand)' },
      { value: 'paddling', label: 'Paddling' },
      { value: 'flogging', label: 'Flogging/Whips' },
      { value: 'caning', label: 'Caning' },
      { value: 'slapping', label: 'Slapping (face, body)' },
      { value: 'punching', label: 'Punching/Heavy impact' },
      { value: 'crops', label: 'Crops and riding crops' },
      { value: 'none', label: 'None interest me' }
    ]
  },
  {
    id: 'roleplay_scenarios',
    question: 'Which roleplay scenarios appeal to you?',
    category: 'Kinks',
    section: 'kinks',
    type: 'multi',
    options: [
      { value: 'age_play', label: 'Age play (Daddy/Mommy Dom, Little)' },
      { value: 'pet_play', label: 'Pet play (Puppy, Kitten, Pony)' },
      { value: 'authority', label: 'Authority figures (Teacher, Boss, Officer)' },
      { value: 'capture', label: 'Capture/Kidnapping fantasy' },
      { value: 'medical', label: 'Medical play' },
      { value: 'religious', label: 'Religious authority scenarios' },
      { value: 'historical', label: 'Historical roles (Victorian, Medieval)' },
      { value: 'supernatural', label: 'Supernatural (Vampire, Werewolf)' },
      { value: 'none', label: 'Not interested in roleplay' }
    ]
  },
  {
    id: 'humiliation_interest',
    question: 'How interested are you in humiliation play?',
    category: 'Kinks',
    section: 'kinks',
    type: 'scale',
    scaleLabels: { min: 'Hard limit', max: 'Major turn-on' }
  },
  {
    id: 'humiliation_types',
    question: 'If interested in humiliation, which types?',
    category: 'Kinks',
    section: 'kinks',
    type: 'multi',
    options: [
      { value: 'verbal', label: 'Verbal humiliation/Name calling' },
      { value: 'public', label: 'Public humiliation' },
      { value: 'body_worship', label: 'Body worship/Degradation' },
      { value: 'objectification', label: 'Objectification (furniture, toy)' },
      { value: 'sexual', label: 'Sexual humiliation' },
      { value: 'forced', label: 'Forced activities' },
      { value: 'exposure', label: 'Exposure/Embarrassment' },
      { value: 'not_interested', label: 'Not interested' }
    ]
  },
  {
    id: 'sensory_play_interest',
    question: 'Rate your interest in sensory play',
    category: 'Kinks',
    section: 'kinks',
    type: 'scale',
    scaleLabels: { min: 'Not interested', max: 'Major interest' }
  },
  {
    id: 'sensory_types',
    question: 'Which sensory experiences appeal to you?',
    category: 'Kinks',
    section: 'kinks',
    type: 'multi',
    options: [
      { value: 'blindfolds', label: 'Blindfolds/Sensory deprivation' },
      { value: 'temperature', label: 'Temperature play (ice, wax)' },
      { value: 'texture', label: 'Texture play (feathers, silk, rough)' },
      { value: 'electro', label: 'Electrostimulation' },
      { value: 'wax', label: 'Wax play' },
      { value: 'knife', label: 'Knife play (sensation, not cutting)' },
      { value: 'fire', label: 'Fire play' },
      { value: 'none', label: 'None interest me' }
    ]
  },
  {
    id: 'edge_play_interest',
    question: 'Interest in edge play (breath play, knife play, blood play)?',
    category: 'Kinks',
    section: 'kinks',
    type: 'choice',
    options: [
      { value: 'hard_limit', label: 'Hard limit - Absolutely not' },
      { value: 'nervous', label: 'Curious but nervous' },
      { value: 'interested', label: 'Interested with experienced partner' },
      { value: 'experienced', label: 'Experienced and enjoy' },
      { value: 'seek', label: 'Actively seek edge play' }
    ]
  },
  {
    id: 'anal_play',
    question: 'Interest level in anal play and training?',
    category: 'Kinks',
    section: 'kinks',
    type: 'scale',
    scaleLabels: { min: 'Hard limit', max: 'Major interest' }
  },
  {
    id: 'orgasm_control',
    question: 'Interest in orgasm control/denial?',
    category: 'Kinks',
    section: 'kinks',
    type: 'scale',
    scaleLabels: { min: 'Not interested', max: 'Major interest' }
  },
  {
    id: 'chastity',
    question: 'Interest in chastity devices and long-term denial?',
    category: 'Kinks',
    section: 'kinks',
    type: 'choice',
    options: [
      { value: 'not_interested', label: 'Not interested' },
      { value: 'curious', label: 'Curious about trying' },
      { value: 'short_term', label: 'Interested in short-term (hours/days)' },
      { value: 'long_term', label: 'Interested in long-term (weeks/months)' },
      { value: 'permanent', label: 'Interested in permanent/long-term lifestyle' }
    ]
  },
  {
    id: 'exhibitionism',
    question: 'Interest in exhibitionism/voyeurism?',
    category: 'Kinks',
    section: 'kinks',
    type: 'choice',
    options: [
      { value: 'private_only', label: 'Prefer complete privacy' },
      { value: 'photography', label: 'Enjoy intimate photography' },
      { value: 'online', label: 'Interested in online sharing' },
      { value: 'watched', label: 'Being watched by others in person' },
      { value: 'public', label: 'Public/semi-public play' },
      { value: 'watching', label: 'Prefer watching others' }
    ]
  },
  {
    id: 'fluids',
    question: 'Comfort level with bodily fluids in play?',
    category: 'Kinks',
    section: 'kinks',
    type: 'choice',
    options: [
      { value: 'standard_only', label: 'Standard fluids only (natural intimacy)' },
      { value: 'saliva', label: 'Comfortable with saliva/spit play' },
      { value: 'squirt', label: 'Interested in squirting/ejaculation focus' },
      { value: 'watersports', label: 'Interested in watersports/golden showers' },
      { value: 'all', label: 'Open to various fluid play' },
      { value: 'hard_limit', label: 'Hard limit beyond natural intimacy' }
    ]
  },
  
  // ============================================
  // SECTION 4: DYNAMICS & COMPATIBILITY
  // ============================================
  {
    id: 'intensity_preference',
    question: 'What level of intensity do you generally prefer?',
    category: 'Dynamics',
    section: 'dynamics',
    type: 'scale',
    scaleLabels: { min: 'Gentle & sensual', max: 'Intense & extreme' }
  },
  {
    id: 'pain_pleasure',
    question: 'How do you relate to pain in intimate contexts?',
    category: 'Dynamics',
    section: 'dynamics',
    type: 'choice',
    options: [
      { value: 'avoid', label: 'I avoid pain completely' },
      { value: 'tolerate', label: 'I tolerate some pain for my partner' },
      { value: 'neutral', label: 'Pain is neutral to me' },
      { value: 'arousing', label: 'Pain enhances arousal' },
      { value: 'require', label: 'I need pain to reach peak arousal' },
      { value: 'give_enjoy', label: 'I enjoy giving pain to willing partners' }
    ]
  },
  {
    id: 'control_comfort',
    question: 'How comfortable are you with giving up control to a trusted partner?',
    category: 'Dynamics',
    section: 'dynamics',
    type: 'scale',
    scaleLabels: { min: 'Very uncomfortable', max: 'Completely comfortable' }
  },
  {
    id: 'taking_control',
    question: 'How comfortable are you with taking complete control of a partner?',
    category: 'Dynamics',
    section: 'dynamics',
    type: 'scale',
    scaleLabels: { min: 'Very uncomfortable', max: 'Completely comfortable' }
  },
  {
    id: 'communication_style',
    question: 'How do you prefer to communicate boundaries and desires?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'multi',
    options: [
      { value: 'verbal_direct', label: 'Direct verbal communication' },
      { value: 'written', label: 'Written agreements and contracts' },
      { value: 'checklists', label: 'Kink checklists and spreadsheets' },
      { value: 'gradual', label: 'Gradual discussions over time' },
      { value: 'nonverbal', label: 'Body language and signals' },
      { value: 'safewords', label: 'Safeword system and traffic lights' }
    ]
  },
  {
    id: 'aftercare_needs',
    question: 'How important is aftercare to you?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'scale',
    scaleLabels: { min: 'Not needed', max: 'Absolutely essential' }
  },
  {
    id: 'aftercare_type',
    question: 'What type of aftercare do you need/enjoy providing?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'multi',
    options: [
      { value: 'physical', label: 'Physical - Cuddling, holding, warmth' },
      { value: 'verbal', label: 'Verbal - Reassurance, praise, processing' },
      { value: 'care', label: 'Acts of care - Water, snacks, blankets' },
      { value: 'alone', label: 'Alone time to decompress' },
      { value: 'playful', label: 'Playful - Laughter, lightness' },
      { value: 'sexual', label: 'Sexual - Continuing intimacy' }
    ]
  },
  {
    id: 'experience_level',
    question: 'How would you describe your BDSM/kink experience?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'choice',
    options: [
      { value: 'fantasy_only', label: 'Fantasy only - Haven\'t tried yet' },
      { value: 'curious', label: 'Curious beginner - Want to explore' },
      { value: 'novice', label: 'Novice - Some basic experience' },
      { value: 'intermediate', label: 'Intermediate - Regular practitioner' },
      { value: 'experienced', label: 'Experienced - Years in the lifestyle' },
      { value: 'expert', label: 'Expert - Extensive experience/educator' }
    ]
  },
  {
    id: 'learning_style',
    question: 'How do you prefer to learn about new kinks and techniques?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'multi',
    options: [
      { value: 'research', label: 'Research online and in books' },
      { value: 'workshops', label: 'Attend workshops and classes' },
      { value: 'mentor', label: 'Learn from experienced mentor' },
      { value: 'partner', label: 'Explore with trusted partner' },
      { value: 'community', label: 'Community events and munches' },
      { value: 'trial', label: 'Trial and error experimentation' }
    ]
  },
  {
    id: 'protocol_interest',
    question: 'Interest in formal protocols and rituals?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'scale',
    scaleLabels: { min: 'Prefer totally casual', max: 'Love strict structure' }
  },
  {
    id: 'emotional_connection',
    question: 'How important is emotional connection for kink/BDSM?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'choice',
    options: [
      { value: 'unnecessary', label: 'Not necessary - Can be purely physical' },
      { value: 'preferred', label: 'Preferred but not required' },
      { value: 'important', label: 'Important - Enhances the experience' },
      { value: 'essential', label: 'Essential - Must have deep connection' },
      { value: 'romantic', label: 'Need romantic love for power exchange' }
    ]
  },
  {
    id: 'jealousy_compersion',
    question: 'How do you feel about your partner playing with others?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'choice',
    options: [
      { value: 'monogamous', label: 'Prefer complete monogamy' },
      { value: 'controlled_jealousy', label: 'Jealous but working on it' },
      { value: 'neutral', label: 'Neutral - Okay with guidelines' },
      { value: 'compersion', label: 'Feel compersion (joy in their joy)' },
      { value: 'encourage', label: 'Actively encourage it' },
      { value: 'required', label: 'Prefer/require non-monogamy' }
    ]
  },
  {
    id: 'gender_preference',
    question: 'Gender preference for BDSM/kink partners?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'choice',
    options: [
      { value: 'men', label: 'Men only' },
      { value: 'women', label: 'Women only' },
      { value: 'nonbinary', label: 'Non-binary/genderqueer only' },
      { value: 'feminine', label: 'Feminine-presenting people' },
      { value: 'masculine', label: 'Masculine-presenting people' },
      { value: 'any', label: 'Any gender/no preference' },
      { value: 'specific', label: 'Specific genders for specific dynamics' }
    ]
  },
  {
    id: 'exploration_pace',
    question: 'What pace of exploration feels right for you?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'choice',
    options: [
      { value: 'very_slow', label: 'Very slow - Take months building trust' },
      { value: 'slow', label: 'Slow and steady - New thing every few weeks' },
      { value: 'moderate', label: 'Moderate - Regularly trying new things' },
      { value: 'adventurous', label: 'Adventurous - Eager to explore quickly' },
      { value: 'settled', label: 'Settled - I know what I like' }
    ]
  },
  {
    id: 'risk_tolerance',
    question: 'Your tolerance for risk in BDSM/kink activities?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'choice',
    options: [
      { value: 'risk_aware', label: 'Very risk-aware - Careful and cautious' },
      { value: 'calculated', label: 'Calculated risks with safety measures' },
      { value: 'moderate', label: 'Moderate - Balance safety and intensity' },
      { value: 'edge', label: 'Enjoy edge play - Calculated higher risk' },
      { value: 'extreme', label: 'Extreme - Push boundaries significantly' }
    ]
  },
  {
    id: 'deal_breakers',
    question: 'Which would be absolute deal-breakers for you?',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'multi',
    options: [
      { value: 'dishonesty', label: 'Dishonesty or hiding things' },
      { value: 'no_consent', label: 'Consent violations' },
      { value: 'unsafe', label: 'Unsafe practices' },
      { value: 'drugs', label: 'Drug/alcohol use during play' },
      { value: 'no_aftercare', label: 'Lack of aftercare' },
      { value: 'public_exposure', label: 'Unwanted public exposure of identity' },
      { value: 'permanence', label: 'Permanent marks/body modification' },
      { value: 'none', label: 'I\'m very flexible' }
    ]
  },
  {
    id: 'ideal_dynamic',
    question: 'Describe your ideal BDSM dynamic:',
    category: 'Compatibility',
    section: 'compatibility',
    type: 'choice',
    options: [
      { value: 'casual_scenes', label: 'Casual scenes with various partners' },
      { value: 'steady_play_partner', label: 'Steady play partner, no romance' },
      { value: 'romantic_kink', label: 'Romantic relationship with kink' },
      { value: 'primary_secondary', label: 'Primary with secondary play partners' },
      { value: 'poly_dynamic', label: 'Polyamorous kink family' },
      { value: 'master_slave', label: 'Master/slave or Owner/property' },
      { value: 'exploring', label: 'Still figuring it out' }
    ]
  }
];
