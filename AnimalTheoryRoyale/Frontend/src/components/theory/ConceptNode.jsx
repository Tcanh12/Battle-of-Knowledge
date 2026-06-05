import React from 'react';
import { Network, FileText, Bookmark } from 'lucide-react';

const ConceptNode = ({ concept, isActive, onClick }) => {
  const getCategoryStyles = (category) => {
    switch(category) {
      case 'core': 
        return 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white border-blue-400/50 shadow-[0_0_30px_rgba(79,70,229,0.5)]';
      case 'chapter': 
        return 'bg-slate-800/90 backdrop-blur-xl text-blue-50 border-indigo-500/40 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:-translate-y-1';
      case 'concept': 
        return 'bg-slate-900/80 backdrop-blur-md text-slate-300 border-slate-700 hover:border-emerald-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:-translate-y-1';
      default: 
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getIcon = (category) => {
    switch(category) {
      case 'core': return <Network size={22} className="text-blue-200" />;
      case 'chapter': return <Bookmark size={18} className="text-indigo-400" />;
      case 'concept': return <FileText size={16} className="text-emerald-400/70" />;
      default: return null;
    }
  };

  return (
    <div 
      onClick={() => onClick && onClick(concept)}
      className={`
        relative px-5 py-4 rounded-2xl border-2 cursor-pointer transition-all duration-300
        flex flex-col gap-1.5 items-start w-[240px]
        ${getCategoryStyles(concept.category)}
        ${isActive ? 'ring-4 ring-purple-500/50 scale-105 z-10' : 'scale-100 z-0'}
      `}
    >
      <div className="flex items-center gap-2 w-full">
        <div className="shrink-0">
          {getIcon(concept.category)}
        </div>
        <h4 className="font-bold text-sm leading-tight line-clamp-2 w-full pr-2">
          {concept.title}
        </h4>
      </div>
      
      {concept.shortDescription && (
        <p className={`text-xs mt-1 line-clamp-3 ${concept.category === 'core' ? 'text-blue-100' : 'text-slate-400'}`}>
          {concept.shortDescription}
        </p>
      )}
      
      {concept.category === 'chapter' && (
        <div className="absolute -top-3 -right-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md border border-indigo-300/30">
          CHƯƠNG {concept.chapterId.split('-')[1]}
        </div>
      )}
    </div>
  );
};

export default ConceptNode;
