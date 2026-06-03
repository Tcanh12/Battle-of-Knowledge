import React from 'react';
import { Target, ArrowRight, PlayCircle } from 'lucide-react';

const TimelineProgressCard = ({ total, viewed, nextEventTitle, onStartOrContinue }) => {
  const percentage = total > 0 ? Math.round((viewed / total) * 100) : 0;
  const isCompleted = viewed === total && total > 0;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col h-full relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Target size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Tiến độ timeline</p>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">Bạn đã khám phá {viewed}/{total} mốc</h3>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm font-bold text-slate-600 mb-2">
            <span>Hoàn thành</span>
            <span className="text-blue-700">{percentage}%</span>
          </div>
          <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ease-out ${isCompleted ? 'bg-emerald-500' : 'bg-blue-600'}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100">
          {isCompleted ? (
            <div className="text-sm text-emerald-700 font-medium bg-emerald-50 p-3 rounded-xl border border-emerald-100 mb-4">
              Bạn đã hoàn thành toàn bộ dòng chảy lịch sử và lý luận. Hãy chuyển sang ôn tập hoặc luyện tập bằng Game Mode.
            </div>
          ) : (
            <div className="text-sm text-slate-600 font-medium mb-4">
              Tiếp tục với mốc tiếp theo:<br/>
              <span className="font-bold text-slate-800">{nextEventTitle || "Bắt đầu hành trình"}</span>
            </div>
          )}

          <button 
            onClick={onStartOrContinue}
            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              isCompleted 
                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' 
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5'
            }`}
          >
            {isCompleted ? (
              <>Ôn tập lại <ArrowRight size={18} /></>
            ) : viewed === 0 ? (
              <>Bắt đầu khám phá <PlayCircle size={18} /></>
            ) : (
              <>Xem mốc tiếp theo <ArrowRight size={18} /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineProgressCard;
