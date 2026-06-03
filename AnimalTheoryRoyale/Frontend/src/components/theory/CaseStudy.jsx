import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, CheckCircle, XCircle, AlertCircle, ArrowRight } from 'lucide-react';

const CaseStudy = ({ caseData, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);

  const handleSelect = (option) => {
    if (!isRevealed) {
      setSelectedOption(option);
      setIsRevealed(true);
      if (onComplete) {
        onComplete(option.isCorrect);
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <BookOpen size={160} />
        </div>
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {caseData.tags?.map(tag => (
              <span key={tag} className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
            {caseData.title}
          </h2>
          <p className="text-slate-300 font-medium">
            {caseData.description}
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Scenario */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl mb-8">
          <p className="text-gray-800 text-lg leading-relaxed">
            {caseData.scenario}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
            Phân tích của bạn:
          </h3>
          {caseData.options.map((option, idx) => {
            const isSelected = selectedOption?.id === option.id;
            const showCorrect = isRevealed && option.isCorrect;
            const showIncorrect = isRevealed && isSelected && !option.isCorrect;

            let buttonClass = "w-full text-left p-5 rounded-xl border-2 transition-all duration-300 flex gap-4 items-start ";
            
            if (!isRevealed) {
              buttonClass += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 bg-white cursor-pointer group";
            } else if (showCorrect) {
              buttonClass += "border-green-500 bg-green-50 shadow-md shadow-green-100";
            } else if (showIncorrect) {
              buttonClass += "border-red-400 bg-red-50 opacity-90";
            } else {
              buttonClass += "border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option)}
                disabled={isRevealed}
                className={buttonClass}
              >
                <div className={`mt-0.5 w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isRevealed ? (showCorrect ? 'border-green-500 bg-green-500 text-white' : showIncorrect ? 'border-red-500 bg-red-500 text-white' : 'border-gray-300') : 'border-gray-300 group-hover:border-blue-400'}`}>
                  {!isRevealed && <span className="text-xs font-bold text-gray-400 group-hover:text-blue-500">{String.fromCharCode(65 + idx)}</span>}
                  {showCorrect && <CheckCircle size={14} />}
                  {showIncorrect && <XCircle size={14} />}
                </div>
                <span className={`text-lg font-medium ${showCorrect ? 'text-green-800' : showIncorrect ? 'text-red-800' : 'text-gray-700'}`}>
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
              className="overflow-hidden"
            >
              <div className={`p-6 rounded-2xl ${selectedOption?.isCorrect ? 'bg-green-100/50' : 'bg-amber-50'}`}>
                <div className="flex items-start gap-4">
                  <div className={`mt-1 shrink-0 ${selectedOption?.isCorrect ? 'text-green-600' : 'text-amber-600'}`}>
                    <AlertCircle size={24} />
                  </div>
                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${selectedOption?.isCorrect ? 'text-green-800' : 'text-amber-800'}`}>
                      {selectedOption?.isCorrect ? 'Phân tích chính xác!' : 'Cần xem xét lại bản chất'}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedOption?.explanation}
                    </p>
                    {/* Show correct explanation if wrong */}
                    {!selectedOption?.isCorrect && (
                      <div className="mt-4 pt-4 border-t border-amber-200">
                        <span className="font-bold text-gray-800 block mb-1">Đáp án đúng:</span>
                        <p className="text-gray-700">
                          {caseData.options.find(o => o.isCorrect)?.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaseStudy;
