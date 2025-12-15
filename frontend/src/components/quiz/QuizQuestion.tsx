import React from 'react';
import { motion } from 'framer-motion';
import { QuizQuestionType } from '@/data/quizQuestions';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentAnswer: string | number | string[] | undefined;
  onAnswer: (answer: string | number | string[]) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  currentAnswer, 
  onAnswer 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="text-center"
    >
      <div className="mb-2">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
          {question.category}
        </span>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
        {question.question}
      </h2>

      {question.type === 'choice' && question.options && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-xl mx-auto">
          {question.options.map((option) => (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(option.value)}
              className={cn(
                "p-4 rounded-xl border-2 transition-all text-left",
                currentAnswer === option.value
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                  : "border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card"
              )}
            >
              <span className={cn(
                "font-medium",
                currentAnswer === option.value ? "text-primary" : "text-foreground"
              )}>
                {option.label}
              </span>
            </motion.button>
          ))}
        </div>
      )}

      {question.type === 'scale' && question.scaleLabels && (
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <Slider
              value={[typeof currentAnswer === 'number' ? currentAnswer : 50]}
              onValueChange={(value) => onAnswer(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{question.scaleLabels.min}</span>
            <span className="text-primary font-medium">
              {typeof currentAnswer === 'number' ? currentAnswer : 50}%
            </span>
            <span>{question.scaleLabels.max}</span>
          </div>
        </div>
      )}

      {question.type === 'multi' && question.options && (
        <div className="space-y-4 max-w-xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            Select all that apply
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {question.options.map((option) => {
              const isSelected = Array.isArray(currentAnswer) && currentAnswer.includes(option.value);
              
              return (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const current = Array.isArray(currentAnswer) ? currentAnswer : [];
                    if (isSelected) {
                      onAnswer(current.filter(v => v !== option.value));
                    } else {
                      onAnswer([...current, option.value]);
                    }
                  }}
                  className={cn(
                    "p-4 rounded-xl border-2 transition-all text-left relative",
                    isSelected
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                      : "border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
                      isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                    )}>
                      {isSelected && (
                        <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={cn(
                      "font-medium",
                      isSelected ? "text-primary" : "text-foreground"
                    )}>
                      {option.label}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default QuizQuestion;
