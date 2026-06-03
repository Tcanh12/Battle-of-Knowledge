import React from 'react';
import { BookOpen, Lightbulb, MapPin } from 'lucide-react';

const TimelinePhaseOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {/* Phase 1 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <BookOpen size={24} />
        </div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Giai đoạn 1</p>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">Tiền đề ra đời</h3>
        <p className="text-sm font-semibold text-slate-700 mb-4 bg-slate-50 p-3 rounded-lg">
          Vì sao CNXHKH có điều kiện xuất hiện?
        </p>
        <ul className="text-sm text-slate-600 space-y-2">
          <li className="flex items-start gap-2 before:content-['•'] before:text-blue-400">Khoa học tự nhiên phát triển</li>
          <li className="flex items-start gap-2 before:content-['•'] before:text-blue-400">CNXH không tưởng</li>
          <li className="flex items-start gap-2 before:content-['•'] before:text-blue-400">Phong trào công nhân thế kỷ XIX</li>
        </ul>
      </div>

      {/* Phase 2 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all group">
        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Lightbulb size={24} />
        </div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Giai đoạn 2</p>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">Hình thành lý luận</h3>
        <p className="text-sm font-semibold text-slate-700 mb-4 bg-slate-50 p-3 rounded-lg">
          CNXH chuyển từ không tưởng thành khoa học như thế nào?
        </p>
        <ul className="text-sm text-slate-600 space-y-2">
          <li className="flex items-start gap-2 before:content-['•'] before:text-amber-400">C. Mác và Ph. Ăngghen</li>
          <li className="flex items-start gap-2 before:content-['•'] before:text-amber-400">Tuyên ngôn của Đảng Cộng sản</li>
          <li className="flex items-start gap-2 before:content-['•'] before:text-amber-400">Sự phát triển của chủ nghĩa Mác - Lênin</li>
        </ul>
      </div>

      {/* Phase 3 */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all group">
        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <MapPin size={24} />
        </div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Giai đoạn 3</p>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">Vận dụng thực tiễn</h3>
        <p className="text-sm font-semibold text-slate-700 mb-4 bg-slate-50 p-3 rounded-lg">
          CNXHKH được vận dụng vào cách mạng và Việt Nam ra sao?
        </p>
        <ul className="text-sm text-slate-600 space-y-2">
          <li className="flex items-start gap-2 before:content-['•'] before:text-emerald-400">Cách mạng Tháng Mười Nga</li>
          <li className="flex items-start gap-2 before:content-['•'] before:text-emerald-400">Thời kỳ quá độ lên CNXH</li>
          <li className="flex items-start gap-2 before:content-['•'] before:text-emerald-400">Đổi mới ở Việt Nam từ năm 1986</li>
        </ul>
      </div>
    </div>
  );
};

export default TimelinePhaseOverview;
