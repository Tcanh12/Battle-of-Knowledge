import React from 'react';
import TimelineLearningFlow from './TimelineLearningFlow';
import { Quote } from 'lucide-react';

const TimelineHero = () => {
  return (
    <div className="flex flex-col justify-center h-full relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/80 text-blue-700 rounded-full text-xs font-black uppercase tracking-widest mb-6 w-fit border border-blue-200/60 shadow-sm backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" /> Hành trình nhận thức
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
        Dòng chảy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Lịch sử & Lý luận</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-medium">
        Khám phá quá trình hình thành Chủ nghĩa xã hội khoa học: từ những khát vọng không tưởng đến hệ thống lý luận khoa học giải phóng nhân loại.
      </p>

      {/* Inspiring Quote Section */}
      <div className="relative mb-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100/50 shadow-sm overflow-hidden group">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 text-blue-200/50 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
          <Quote size={120} />
        </div>
        <div className="relative z-10">
          <p className="text-lg md:text-xl text-slate-700 font-medium italic leading-relaxed mb-4">
            "Không có lý luận cách mạng thì cũng không thể có phong trào cách mạng... Chỉ đảng nào được hướng dẫn bởi một lý luận tiên phong thì mới có khả năng làm tròn vai trò chiến sĩ tiên phong."
          </p>
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-8 bg-blue-500 rounded-full" />
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">V.I. Lênin</span>
          </div>
        </div>
      </div>

      <TimelineLearningFlow />
    </div>
  );
};

export default TimelineHero;
