import React from 'react';
import { Loader2 } from 'lucide-react';

const PageLoading = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center text-blue-600">
      <div className="flex flex-col items-center gap-4">
        <Loader2 size={40} className="animate-spin" />
        <p className="text-slate-500 font-medium animate-pulse">Đang tải dữ liệu...</p>
      </div>
    </div>
  );
};

export default PageLoading;
