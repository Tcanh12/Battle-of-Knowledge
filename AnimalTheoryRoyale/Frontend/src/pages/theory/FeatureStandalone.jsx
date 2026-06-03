import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EmptyState from '../../components/EmptyState';
import ErrorBoundary from '../../components/ErrorBoundary';

const FeatureStandalone = ({ title, description }) => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
          <button 
            onClick={() => navigate('/theory')} 
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Về Dashboard
          </button>
        </div>
        <EmptyState 
          title={title} 
          description={description || "Tính năng này đang được thiết kế dưới dạng chuyên đề độc lập. Tạm thời hãy truy cập qua từng Chương nhé."}
        />
      </div>
    </ErrorBoundary>
  );
};

export default FeatureStandalone;
