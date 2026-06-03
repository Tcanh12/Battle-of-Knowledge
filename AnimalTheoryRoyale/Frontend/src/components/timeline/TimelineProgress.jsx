import React from 'react';
import { Target } from 'lucide-react';

const TimelineProgress = ({ total, viewed }) => {
  const percentage = total > 0 ? Math.round((viewed / total) * 100) : 0;
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
          <Target size={24} />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-lg">Tiến trình khám phá</h3>
          <p className="text-slate-500 text-sm">Bạn đã xem {viewed}/{total} mốc sự kiện quan trọng</p>
        </div>
      </div>
      
      <div className="w-full sm:w-1/2 flex items-center gap-4">
        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="font-black text-blue-700 w-12 text-right">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default TimelineProgress;
