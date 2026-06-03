import React from 'react';
import { Network, FileText, Bookmark } from 'lucide-react';

const ConceptNode = ({ concept, isActive, onClick }) => {
  const getCategoryStyles = (category) => {
    switch(category) {
      case 'core': return 'bg-blue-600 text-white border-blue-700 shadow-blue-200';
      case 'chapter': return 'bg-indigo-100 text-indigo-900 border-indigo-200 hover:bg-indigo-200';
      case 'concept': return 'bg-white text-gray-800 border-gray-200 hover:border-blue-300 hover:shadow-md';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getIcon = (category) => {
    switch(category) {
      case 'core': return <Network size={20} />;
      case 'chapter': return <Bookmark size={18} className="text-indigo-600" />;
      case 'concept': return <FileText size={16} className="text-gray-400" />;
      default: return null;
    }
  };

  return (
    <div 
      onClick={() => onClick && onClick(concept)}
      className={`
        relative px-4 py-3 rounded-xl border-2 cursor-pointer transition-all duration-300
        flex flex-col gap-1 items-start min-w-[200px] max-w-[280px]
        ${getCategoryStyles(concept.category)}
        ${isActive ? 'ring-4 ring-blue-300/50 scale-105' : 'scale-100'}
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
        <p className={`text-xs mt-1 line-clamp-2 ${concept.category === 'core' ? 'text-blue-100' : 'text-gray-500'}`}>
          {concept.shortDescription}
        </p>
      )}
      
      {concept.category === 'chapter' && (
        <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
          CHƯƠNG {concept.chapterId.split('-')[1]}
        </div>
      )}
    </div>
  );
};

export default ConceptNode;
