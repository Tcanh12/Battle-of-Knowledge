import React from 'react';
import TimelineLearningFlow from './TimelineLearningFlow';

const TimelineHero = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit border border-blue-200">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" /> Lịch sử tư tưởng
      </div>
      
      <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
        Dòng chảy lịch sử và lý luận
      </h1>
      
      <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
        Khám phá Chủ nghĩa xã hội khoa học như một hành trình phát triển: 
        từ những tiền đề kinh tế, xã hội, khoa học và tư tưởng của thế kỷ XIX, 
        đến sự ra đời của lý luận khoa học do C. Mác và Ph. Ăngghen sáng lập, 
        rồi quá trình vận dụng vào thực tiễn cách mạng và con đường đi lên chủ nghĩa xã hội ở Việt Nam.
      </p>

      <div className="mb-6 flex flex-wrap gap-3">
        <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 shadow-sm">
          <span className="text-blue-600">12</span> mốc lý luận
        </span>
        <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 shadow-sm">
          <span className="text-amber-500">7</span> chương liên kết
        </span>
        <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600 shadow-sm">
          <span className="text-emerald-500">3</span> chặng học tập
        </span>
      </div>

      <TimelineLearningFlow />
    </div>
  );
};

export default TimelineHero;
