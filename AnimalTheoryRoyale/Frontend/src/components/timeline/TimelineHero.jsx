import React from 'react';

const TimelineHero = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" /> Lịch sử tư tưởng
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
        Dòng chảy lịch sử và lý luận
      </h1>
      <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
        Theo dõi quá trình hình thành, phát triển và vận dụng Chủ nghĩa xã hội khoa học từ các tiền đề thế kỷ XIX đến con đường đi lên chủ nghĩa xã hội ở Việt Nam.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center min-w-[120px]">
          <span className="text-3xl font-black text-blue-600 mb-1">12</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mốc lý luận</span>
        </div>
        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center min-w-[120px]">
          <span className="text-3xl font-black text-amber-500 mb-1">7</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Chương</span>
        </div>
        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center min-w-[120px]">
          <span className="text-3xl font-black text-emerald-500 mb-1">3</span>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Giai đoạn</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineHero;
