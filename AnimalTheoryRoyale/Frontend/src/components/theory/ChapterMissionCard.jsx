import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import ProgressBar from './ProgressBar';

const ChapterMissionCard = ({ chapter, progress = 0 }) => {
  const navigate = useNavigate();
  
  // Dynamically resolve the icon component
  const IconComponent = Icons[chapter.icon] || Icons.Book;

  const isCompleted = progress >= 100;
  const isStarted = progress > 0;

  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-sm border p-6 transition-all duration-300 hover:shadow-md ${isCompleted ? 'border-green-200' : 'border-gray-100 hover:border-blue-200'}`}
    >
      {/* Decorative top border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-80" 
        style={{ backgroundColor: chapter.color }} 
      />

      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div 
            className="p-3 rounded-xl flex items-center justify-center text-white shadow-sm"
            style={{ backgroundColor: chapter.color }}
          >
            <IconComponent size={24} />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
              Chương {chapter.chapterNumber}
            </div>
            <h3 className="text-xl font-bold text-gray-800 line-clamp-2" title={chapter.title}>
              {chapter.shortTitle}
            </h3>
          </div>
        </div>
        
        {isCompleted && (
          <div className="bg-green-100 text-green-700 p-1.5 rounded-full" title="Hoàn thành">
            <Icons.CheckCircle size={20} className="fill-current" />
          </div>
        )}
      </div>

      <p className="text-gray-600 text-sm mb-6 line-clamp-3 h-[60px]">
        {chapter.description}
      </p>

      <div className="mb-6">
        <div className="flex justify-between text-xs font-semibold text-gray-500 mb-2">
          <span>Tiến độ học tập</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar progress={progress} color={chapter.color} />
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => navigate(`/theory/chapter/${chapter.id}`)}
          className="flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm text-white transition-all flex justify-center items-center gap-2 hover:opacity-90 active:scale-95"
          style={{ backgroundColor: chapter.color, boxShadow: `0 4px 14px 0 ${chapter.color}40` }}
        >
          {isStarted ? 'Tiếp tục học' : 'Bắt đầu ngay'}
          <Icons.ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChapterMissionCard;
