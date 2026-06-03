import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X, BookOpen, Clock, AlertTriangle, Lightbulb, Target, ArrowRight, BrainCircuit, Globe2 } from 'lucide-react';

const TimelineDetailPanel = ({ event, onClose }) => {
  const navigate = useNavigate();

  if (!event) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {event.phase}
              </span>
              <span className="text-slate-500 font-medium flex items-center gap-1 text-sm">
                <Clock size={16} /> {event.period}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Body - Scrollable */}
          <div className="overflow-y-auto p-6 md:p-10 flex-grow custom-scrollbar">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              {event.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                <section>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-3">
                    <Globe2 className="text-blue-500" /> Bối cảnh lịch sử
                  </h3>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                    {event.historicalContext}
                  </p>
                </section>

                <section>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-3">
                    <AlertTriangle className="text-amber-500" /> Vấn đề đặt ra
                  </h3>
                  <p className="text-slate-600 leading-relaxed bg-amber-50 p-4 rounded-xl border border-amber-100">
                    {event.socialProblem}
                  </p>
                </section>

                <section>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-3">
                    <Lightbulb className="text-emerald-500" /> Ý nghĩa lý luận
                  </h3>
                  <p className="text-slate-600 leading-relaxed bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    {event.theoreticalMeaning}
                  </p>
                </section>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <section>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-3">
                    <Target className="text-purple-500" /> Tác động đến CNXHKH
                  </h3>
                  <p className="text-slate-600 leading-relaxed bg-purple-50 p-4 rounded-xl border border-purple-100">
                    {event.impactOnSocialism}
                  </p>
                </section>

                {event.vietnamConnection && (
                  <section>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-slate-800 mb-3">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VN" className="w-5 h-5 rounded-sm object-cover border" /> 
                      Liên hệ Việt Nam
                    </h3>
                    <p className="text-slate-600 leading-relaxed bg-red-50 p-4 rounded-xl border border-red-100">
                      {event.vietnamConnection}
                    </p>
                  </section>
                )}

                <section className="bg-slate-800 text-white p-5 rounded-xl">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-blue-300 mb-3">
                    <BrainCircuit /> Câu hỏi suy ngẫm
                  </h3>
                  <p className="font-medium text-lg leading-relaxed text-slate-200">
                    "{event.reflectionQuestion}"
                  </p>
                </section>
                
                {event.relatedConcepts?.length > 0 && (
                  <section>
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Khái niệm liên quan
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {event.relatedConcepts.map(c => (
                        <span key={c} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200">
                          {c}
                        </span>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>

          {/* Footer - Actions */}
          <div className="bg-white border-t border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-2 text-slate-500">
              <span className="font-bold text-slate-800">Cốt lõi:</span> {event.keyTakeaway}
            </div>
            {event.relatedChapters?.length > 0 && (
              <button 
                onClick={() => {
                  onClose();
                  navigate(`/theory/chapter/${event.relatedChapters[0]}`);
                }}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shrink-0"
              >
                <BookOpen size={18} /> Ôn tập {event.relatedChapters[0].replace('chuong-', 'Chương ')} <ArrowRight size={18} />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TimelineDetailPanel;
