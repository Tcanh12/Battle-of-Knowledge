import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, CalendarDays, Bookmark, BookOpen } from 'lucide-react';
import { timelineData } from '../../data/timelineData';
import EmptyState from '../../components/EmptyState';
import ErrorBoundary from '../../components/ErrorBoundary';

const LearningJourney = () => {
  const navigate = useNavigate();

  const safeTimelineData = Array.isArray(timelineData) ? timelineData : [];

  const getCategoryColor = (category) => {
    switch(category) {
      case 'phong-trao': return 'bg-rose-100 text-rose-700 border-rose-300';
      case 'tac-pham': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'to-chuc': return 'bg-amber-100 text-amber-700 border-amber-300';
      case 'su-kien': return 'bg-emerald-100 text-emerald-700 border-emerald-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'phong-trao': return <Bookmark size={18} />;
      case 'tac-pham': return <BookOpen size={18} />;
      case 'to-chuc': return <CalendarDays size={18} />;
      case 'su-kien': return <Clock size={18} />;
      default: return <Clock size={18} />;
    }
  };

  if (safeTimelineData.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col relative">
        <button onClick={() => navigate('/theory')} className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10 flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors">
          <ArrowLeft size={20} /> Về Dashboard
        </button>
        <EmptyState title="Dữ liệu Timeline đang được cập nhật" />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 text-slate-800 pb-24">
        {/* Header */}
        <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <button onClick={() => navigate('/theory')} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
              <ArrowLeft size={20} /> <span className="hidden sm:inline">Về Dashboard</span>
            </button>
            <div className="font-bold text-slate-800 flex items-center gap-2">
              <Clock className="text-blue-600" /> Learning Journey
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Dòng thời gian lịch sử
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Hành trình phát triển của Chủ nghĩa xã hội khoa học từ những phong trào tự phát đầu tiên đến công cuộc Đổi mới tại Việt Nam.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2 rounded-full" />

            <div className="flex flex-col gap-12 md:gap-8">
              {safeTimelineData.map((event, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div key={event.id || index} className="relative flex items-stretch md:items-center w-full">
                    
                    {/* Desktop Left Area */}
                    <div className={`hidden md:block w-1/2 pr-12 ${!isEven ? 'md:invisible' : ''}`}>
                      {isEven && (
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative text-right h-full">
                          <div className="absolute top-1/2 -translate-y-1/2 right-[-8.5px] w-4 h-4 bg-white border-t border-r border-slate-100 transform rotate-45 border-l-0 border-b-0" />
                          <div className="flex items-center gap-3 mb-3 justify-end flex-wrap">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5 ${getCategoryColor(event.category)}`}>
                              {getCategoryIcon(event.category)}
                              {event.category?.replace('-', ' ')}
                            </span>
                            <span className="text-lg font-black text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
                              {event.year}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                          <p className="text-slate-600 leading-relaxed text-sm">{event.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.2)] transform -translate-x-1/2 z-10 mt-6 md:mt-0" />

                    {/* Desktop Right Area & Mobile Area */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-12 ${isEven ? 'md:invisible md:h-0' : ''}`}>
                      <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative text-left h-full ${isEven ? 'md:hidden' : ''}`}>
                        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[-8.5px] w-4 h-4 bg-white border-b border-l border-slate-100 transform rotate-45 border-t-0 border-r-0" />
                        <div className="flex items-center gap-3 mb-3 justify-start flex-wrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5 ${getCategoryColor(event.category)}`}>
                            {getCategoryIcon(event.category)}
                            {event.category?.replace('-', ' ')}
                          </span>
                          <span className="text-lg font-black text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
                            {event.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{event.description}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default LearningJourney;
