import React from 'react';
import { PackageOpen } from 'lucide-react';

const EmptyState = ({ title = "Không có dữ liệu", description = "Nội dung đang được cập nhật." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center h-full min-h-[300px]">
      <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mb-4">
        <PackageOpen size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 max-w-sm">{description}</p>
    </div>
  );
};

export default EmptyState;
