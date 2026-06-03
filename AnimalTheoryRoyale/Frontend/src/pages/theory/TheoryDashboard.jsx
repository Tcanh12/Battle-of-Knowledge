import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Map, Award, ArrowLeft, Gamepad2 } from 'lucide-react';
import { chaptersData } from '../../data/chaptersData';
import { getChapterProgress, getOverallProgress } from '../../utils/progressStorage';
import { ChapterMissionCard } from '../../components/theory';
import { OLD_GAME_URL } from '../../config/gameConfig';
import ErrorBoundary from '../../components/ErrorBoundary';

const TheoryDashboard = () => {
  const navigate = useNavigate();
  const [overallProgress, setOverallProgress] = useState(0);

  // Use memo to parse data safely
  const safeChapters = useMemo(() => Array.isArray(chaptersData) ? chaptersData : [], []);

  useEffect(() => {
    // Adding setTimeout to defer heavy local storage reads to prevent UI freezing on mount
    const timer = setTimeout(() => {
      setOverallProgress(getOverallProgress());
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white pt-8 pb-16 px-4 md:px-6 lg:px-12 relative overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
              <button 
                onClick={() => window.location.href = OLD_GAME_URL}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10"
              >
                <Gamepad2 size={20} />
                <span>Về Animal Theory Royale</span>
              </button>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl font-medium flex items-center gap-2 text-blue-100 w-full sm:w-auto justify-center sm:justify-start">
                <Award className="text-yellow-400 shrink-0" size={20} />
                <span className="whitespace-nowrap">Tổng tiến độ: {Math.round(overallProgress)}%</span>
              </div>
            </div>
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-xs md:text-sm font-bold uppercase tracking-wider mb-4 md:mb-6">
                <BookOpen size={16} />
                <span>Học viện Lý luận</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
                CNXHKH Knowledge Campus
              </h1>
              <p className="text-base md:text-xl text-blue-100/90 leading-relaxed max-w-2xl">
                Hành trình khám phá quy luật phát triển của xã hội, sứ mệnh của giai cấp công nhân và con đường đi lên Chủ nghĩa xã hội tại Việt Nam.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 -mt-8 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {/* Main Action Cards */}
            <div 
              onClick={() => navigate('/theory/galaxy')} 
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-start sm:items-center gap-4 sm:gap-6 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Map size={28} className="md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">Concept Galaxy</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">Khám phá bản đồ tư duy với hơn 70 khái niệm cốt lõi được liên kết chặt chẽ.</p>
              </div>
            </div>
            <div 
              onClick={() => navigate('/theory/journey')} 
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex items-start sm:items-center gap-4 sm:gap-6 cursor-pointer hover:shadow-md hover:border-emerald-200 transition-all group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <BookOpen size={28} className="md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-2">Learning Journey</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">Xem dòng thời gian các sự kiện lịch sử quan trọng của CNXHKH.</p>
              </div>
            </div>
          </div>

          {/* Chapters Grid */}
          <div className="mb-6 flex items-center gap-3">
            <BookOpen className="text-blue-600 shrink-0" /> 
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">
              Chương trình học
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeChapters.map(chapter => {
              const progress = getChapterProgress(chapter.id);
              return (
                <ChapterMissionCard 
                  key={chapter.id} 
                  chapter={chapter} 
                  progress={progress.completionPercentage} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default TheoryDashboard;
