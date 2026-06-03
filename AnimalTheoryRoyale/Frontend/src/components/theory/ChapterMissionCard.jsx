import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import ProgressBar from './ProgressBar';

const ChapterMissionCard = ({ chapter, progress = 0 }) => {
  const navigate = useNavigate();
  
  // Dynamically resolve the icon component
  const IconComponent = Icons[chapter?.icon] || Icons.Book;

  const isCompleted = progress >= 100;
  const isStarted = progress > 0;

  if (!chapter) return null;

  return (
    <div 
      className={`relative rounded-2xl border bg-white p-6 shadow-sm flex flex-col gap-4 min-h-[320px] transition-all duration-300 hover:shadow-md ${isCompleted ? 'border-green-200' : 'border-slate-200 hover:border-blue-300'}`}
    >
      {/* Decorative top border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl opacity-80" 
        style={{ backgroundColor: chapter.color || '#3b82f6' }} 
      />

      <div className="flex items-start justify-between gap-3 mt-1">
        <div className="flex items-start gap-3">
          <div 
            className="p-3 rounded-xl flex items-center justify-center text-white shadow-sm shrink-0"
            style={{ backgroundColor: chapter.color || '#3b82f6' }}
          >
            <IconComponent size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">
              Chương {chapter.chapterNumber}
            </p>
            <h3 className="text-xl font-bold text-slate-800 leading-snug line-clamp-2" title={chapter.title}>
              {chapter.shortTitle || chapter.title}
            </h3>
          </div>
        </div>
        
        {isCompleted && (
          <div className="bg-green-100 text-green-700 p-1.5 rounded-full shrink-0" title="Đã hoàn thành">
            <Icons.CheckCircle2 size={20} className="fill-green-100" />
          </div>
        )}
      </div>

      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-2">
        {chapter.description}
      </p>

      {/* Progress Section */}
      <div className="mt-auto pt-2">
        <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
          <span>Tiến độ học tập</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar progress={progress} color={chapter.color || '#3b82f6'} />
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={() => navigate(`/theory/chapter/${chapter.id}`)}
          className="flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm text-white transition-all flex justify-center items-center gap-2 hover:opacity-90 active:scale-95"
          style={{ backgroundColor: chapter.color || '#3b82f6', boxShadow: `0 4px 14px 0 ${chapter.color}40` }}
        >
          {isStarted ? 'Tiếp tục học' : 'Vào học ngay'}
          <Icons.ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChapterMissionCard;
