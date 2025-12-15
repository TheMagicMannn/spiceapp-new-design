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
    </motion.div>
  );
};

export default QuizQuestion;
