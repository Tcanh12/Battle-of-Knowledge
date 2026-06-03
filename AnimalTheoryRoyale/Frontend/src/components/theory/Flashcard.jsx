import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, CheckCircle2, XCircle } from 'lucide-react';

const Flashcard = ({ card, onResult }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, correct, incorrect

  const handleFlip = () => {
    if (status === 'idle') {
      setIsFlipped(!isFlipped);
    }
  };

  const handleAnswer = (e, isCorrect) => {
    e.stopPropagation();
    setStatus(isCorrect ? 'correct' : 'incorrect');
    if (onResult) {
      setTimeout(() => {
        onResult(isCorrect);
        // Reset for next card if needed, though usually parent unmounts/remounts
        setIsFlipped(false);
        setStatus('idle');
      }, 800);
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'remember': return 'text-blue-500 bg-blue-50';
      case 'understand': return 'text-purple-500 bg-purple-50';
      case 'apply': return 'text-amber-500 bg-amber-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getStatusBorder = () => {
    if (status === 'correct') return 'border-green-500 shadow-green-200';
    if (status === 'incorrect') return 'border-red-500 shadow-red-200';
    return 'border-gray-200 hover:border-blue-300';
  };

  return (
    <div className="perspective-1000 w-full h-80 cursor-pointer group" onClick={handleFlip}>
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div 
          className={`absolute w-full h-full backface-hidden bg-white rounded-2xl border-2 shadow-lg p-6 flex flex-col items-center justify-center text-center transition-colors duration-300 ${getStatusBorder()}`}
        >
          <div className="absolute top-4 right-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getTypeColor(card.type)}`}>
              {card.type}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 leading-snug">
            {card.front}
          </h3>
          <div className="absolute bottom-6 text-gray-400 flex items-center gap-2 text-sm font-medium">
            <RefreshCcw size={16} /> Nhấn để lật thẻ
          </div>
        </div>

        {/* Back */}
        <div 
          className={`absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 shadow-lg p-6 flex flex-col items-center justify-center text-center rotate-y-180 transition-colors duration-300 ${getStatusBorder()}`}
        >
          <h3 className="text-xl font-medium text-gray-800 leading-relaxed mb-8">
            {card.back}
          </h3>
          
          <div className="absolute bottom-6 flex gap-4 w-full px-8">
            <button 
              onClick={(e) => handleAnswer(e, false)}
              className="flex-1 py-2 bg-white border border-red-200 text-red-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
            >
              <XCircle size={20} /> Chưa thuộc
            </button>
            <button 
              onClick={(e) => handleAnswer(e, true)}
              className="flex-1 py-2 bg-blue-600 border border-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
            >
              <CheckCircle2 size={20} /> Đã thuộc
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flashcard;
