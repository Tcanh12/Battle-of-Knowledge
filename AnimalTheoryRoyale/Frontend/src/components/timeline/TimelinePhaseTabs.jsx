import React from 'react';

const TimelinePhaseTabs = ({ activePhase, onPhaseChange }) => {
  const phases = [
    { id: 'all', label: 'Tất cả' },
    { id: 'Tiền đề ra đời', label: 'Tiền đề ra đời' },
    { id: 'Hình thành CNXHKH', label: 'Hình thành CNXHKH' },
    { id: 'Phát triển và vận dụng', label: 'Phát triển lý luận' },
    { id: 'Việt Nam', label: 'Vận dụng vào Việt Nam' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {phases.map((phase) => (
        <button
          key={phase.id}
          onClick={() => onPhaseChange(phase.id)}
          className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
            activePhase === phase.id
              ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
          }`}
        >
          {phase.label}
        </button>
      ))}
    </div>
  );
};

export default TimelinePhaseTabs;
