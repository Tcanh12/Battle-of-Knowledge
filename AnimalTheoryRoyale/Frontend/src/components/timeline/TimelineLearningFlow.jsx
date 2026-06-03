import React from 'react';
import { ArrowRight, BookOpen, Lightbulb, MapPin } from 'lucide-react';

const TimelineLearningFlow = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-6">
      <div className="flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2.5 rounded-xl border border-blue-100 font-semibold text-sm w-full sm:w-auto shadow-sm">
        <BookOpen size={18} className="text-blue-500 shrink-0" />
        Tiền đề ra đời
      </div>
      <ArrowRight size={16} className="text-slate-300 rotate-90 sm:rotate-0 shrink-0" />
      <div className="flex items-center gap-2 bg-amber-50 text-amber-800 px-4 py-2.5 rounded-xl border border-amber-100 font-semibold text-sm w-full sm:w-auto shadow-sm">
        <Lightbulb size={18} className="text-amber-500 shrink-0" />
        Hình thành lý luận
      </div>
      <ArrowRight size={16} className="text-slate-300 rotate-90 sm:rotate-0 shrink-0" />
      <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2.5 rounded-xl border border-emerald-100 font-semibold text-sm w-full sm:w-auto shadow-sm">
        <MapPin size={18} className="text-emerald-500 shrink-0" />
        Vận dụng ở Việt Nam
      </div>
    </div>
  );
};

export default TimelineLearningFlow;
