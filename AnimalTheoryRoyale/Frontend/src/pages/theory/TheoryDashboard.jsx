import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Map, Award, ArrowLeft, Gamepad2 } from 'lucide-react';
import { chaptersData } from '../../data/chaptersData';
import { getProgress, getOverallProgress } from '../../utils/progressStorage';
import { ChapterMissionCard } from '../../components/theory';
import { OLD_GAME_URL } from '../../config/gameConfig';

const TheoryDashboard = () => {
  const navigate = useNavigate();
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    setOverallProgress(getOverallProgress());
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white pt-8 pb-16 px-6 lg:px-12 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-12">
            <button 
              onClick={() => window.location.href = OLD_GAME_URL}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm"
            >
              <Gamepad2 size={20} />
              <span>Về Animal Theory Royale</span>
            </button>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl font-medium flex items-center gap-2 text-blue-100">
              <Award className="text-yellow-400" size={20} />
              Tổng tiến độ: {Math.round(overallProgress)}%
            </div>
          </div>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-bold uppercase tracking-wider mb-6">
              <BookOpen size={16} />
              <span>Học viện Lý luận</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              CNXHKH Knowledge Campus
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl">
              Hành trình khám phá quy luật phát triển của xã hội, sứ mệnh của giai cấp công nhân và con đường đi lên Chủ nghĩa xã hội tại Việt Nam.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-8 relative z-20">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Main Action Cards */}
          <div onClick={() => navigate('/theory/galaxy')} className="flex-1 bg-white rounded-2xl shadow-md border border-slate-100 p-6 flex items-center gap-6 cursor-pointer hover:shadow-lg hover:border-blue-200 transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Map size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Concept Galaxy</h3>
              <p className="text-slate-600 text-sm">Khám phá bản đồ tư duy với hơn 70 khái niệm cốt lõi được liên kết chặt chẽ.</p>
            </div>
          </div>
          <div onClick={() => navigate('/theory/journey')} className="flex-1 bg-white rounded-2xl shadow-md border border-slate-100 p-6 flex items-center gap-6 cursor-pointer hover:shadow-lg hover:border-emerald-200 transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <BookOpen size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Learning Journey</h3>
              <p className="text-slate-600 text-sm">Xem dòng thời gian các sự kiện lịch sử quan trọng của CNXHKH.</p>
            </div>
          </div>
        </div>

        {/* Chapters Grid */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <BookOpen className="text-blue-600" /> 
          Chương trình học
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaptersData.map(chapter => {
            const progress = getProgress(chapter.id);
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
  );
};

export default TheoryDashboard;
