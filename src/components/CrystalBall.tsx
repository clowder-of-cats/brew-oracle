import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const CrystalBallContainer = styled.div`
  width: 80%;
  max-width: 600px;
  aspect-ratio: 1;
  position: relative;
  margin: 2rem auto;
`;

const Ball = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 20%,
    rgba(30, 30, 50, 0.8) 60%
  );
  box-shadow: 
    0 0 50px rgba(138, 43, 226, 0.2),
    inset 0 0 50px rgba(138, 43, 226, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const QuestionInput = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-family: 'Crimson Text', serif;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 2rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(138, 43, 226, 0.3);
  }
`;

const Answer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem;
  pointer-events: none;
`;

interface CrystalBallProps {
  question: string;
  setQuestion: (question: string) => void;
  knowledgeBase: any;
}

const CrystalBall: React.FC<CrystalBallProps> = ({ question, setQuestion, knowledgeBase }) => {
  const [answer, setAnswer] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const generateAnswer = () => {
    if (!question) return;

    setIsAnimating(true);
    
    // Simple keyword matching for demo purposes
    const keywords = question.toLowerCase().split(' ');
    let response = '';

    if (keywords.some(k => k.includes('recipe') || k.includes('brew'))) {
      const recipe = knowledgeBase.brewRecipes[Math.floor(Math.random() * knowledgeBase.brewRecipes.length)];
      response = `🌟 The cosmic beans reveal... For ${recipe.method}, use a ${recipe.ratio} ratio with ${recipe.grindSize} grounds. Brew for ${recipe.time} at ${recipe.temperature}.`;
    } else if (keywords.some(k => k.includes('grind') || k.includes('grinder'))) {
      const grinder = knowledgeBase.grinderInfo[0];
      response = `✨ The mystical burrs whisper... A ${grinder.type} is ideal for ${grinder.bestFor.join(', ')}. Remember to ${grinder.maintenance[0].toLowerCase()}.`;
    } else if (keywords.some(k => k.includes('problem') || k.includes('bitter') || k.includes('sour'))) {
      const issue = knowledgeBase.troubleshooting[Math.floor(Math.random() * knowledgeBase.troubleshooting.length)];
      response = `🔮 I sense your coffee troubles... If your brew is ${issue.problem.toLowerCase()}, the spirits suggest: ${issue.solutions[0]}.`;
    } else {
      const note = knowledgeBase.cuppingNotes[Math.floor(Math.random() * knowledgeBase.cuppingNotes.length)];
      response = `🌙 The oracle foresees... ${note.origin} will bring you ${note.flavor.join(', ')} flavors. ${note.notes}`;
    }

    setTimeout(() => {
      setAnswer(response);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <>
      <CrystalBallContainer>
        <Ball
          onClick={generateAnswer}
          animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 1 }}
        >
          <AnimatePresence mode='wait'>
            {answer && (
              <Answer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {answer}
              </Answer>
            )}
          </AnimatePresence>
        </Ball>
      </CrystalBallContainer>
      <QuestionInput
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask the Brew Oracle about your coffee..."
        onKeyPress={(e) => e.key === 'Enter' && generateAnswer()}
      />
    </>
  );
};

export default CrystalBall;
