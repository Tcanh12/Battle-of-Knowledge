import React from 'react';

const ProgressBar = ({ progress, color = "#3B82F6", height = "h-2", label = false }) => {
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="w-full flex items-center gap-2">
      <div className={`flex-1 bg-gray-200 rounded-full overflow-hidden ${height}`}>
        <div
          className="h-full transition-all duration-500 ease-out rounded-full"
          style={{ width: `${safeProgress}%`, backgroundColor: color }}
        />
      </div>
      {label && (
        <span className="text-xs font-semibold text-gray-600 w-9 text-right">
          {Math.round(safeProgress)}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
