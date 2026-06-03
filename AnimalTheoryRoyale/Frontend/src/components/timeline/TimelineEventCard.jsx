import React from 'react';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

const TimelineEventCard = ({ event, isEven, onViewDetail, isViewed }) => {
  const getPhaseColor = (phase) => {
    switch(phase) {
      case 'Tiền đề ra đời': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Hình thành CNXHKH': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Phát triển và vận dụng': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Việt Nam': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getPhaseDotColor = (phase) => {
    switch(phase) {
      case 'Tiền đề ra đời': return 'bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]';
      case 'Hình thành CNXHKH': return 'bg-amber-500 shadow-[0_0_0_4px_rgba(245,158,11,0.2)]';
      case 'Phát triển và vận dụng': return 'bg-purple-500 shadow-[0_0_0_4px_rgba(168,85,247,0.2)]';
      case 'Việt Nam': return 'bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.2)]';
      default: return 'bg-slate-500 shadow-[0_0_0_4px_rgba(100,116,139,0.2)]';
    }
  };

  const ContentCard = () => (
    <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 relative text-left h-full flex flex-col group ${isViewed ? 'ring-1 ring-green-400' : ''}`}>
      {isViewed && (
        <div className="absolute -top-3 -right-3 bg-green-100 text-green-700 p-1.5 rounded-full shadow-sm" title="Đã xem">
          <CheckCircle2 size={18} className="fill-green-200" />
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getPhaseColor(event.phase)}`}>
          {event.phase}
        </span>
        <span className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          {event.period}
        </span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
        {event.title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-6 flex-grow">
        {event.shortDescription}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2">
          {event.relatedChapters?.map(chap => (
            <span key={chap} className="flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-200">
              <BookOpen size={12} /> {chap.replace('chuong-', 'Chương ')}
            </span>
          ))}
        </div>
        
        <button 
          onClick={() => onViewDetail(event)}
          className="flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
        >
          Xem ý nghĩa <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative flex items-stretch md:items-center w-full min-h-[200px]">
      {/* Desktop Left Area */}
      <div className={`hidden md:flex w-1/2 pr-12 justify-end ${!isEven ? 'md:invisible' : ''}`}>
        {isEven && (
          <div className="w-full relative">
            <div className="absolute top-1/2 -translate-y-1/2 right-[-8.5px] w-4 h-4 bg-white border-t border-r border-slate-200 transform rotate-45 border-l-0 border-b-0 z-10" />
            <ContentCard />
          </div>
        )}
      </div>

      {/* Center Dot */}
      <div className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full ${getPhaseDotColor(event.phase)} transform -translate-x-1/2 z-20 mt-8 md:mt-0`} />

      {/* Desktop Right Area & Mobile Area */}
      <div className={`w-full md:w-1/2 pl-16 md:pl-12 ${isEven ? 'md:invisible md:h-0 md:p-0' : ''}`}>
        <div className={`w-full relative h-full ${isEven ? 'md:hidden' : ''}`}>
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[-8.5px] w-4 h-4 bg-white border-b border-l border-slate-200 transform rotate-45 border-t-0 border-r-0 z-10" />
          <ContentCard />
        </div>
      </div>
    </div>
  );
};

export default TimelineEventCard;
