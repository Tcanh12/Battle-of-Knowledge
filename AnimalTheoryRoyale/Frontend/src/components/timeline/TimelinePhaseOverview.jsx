import React from 'react';
import { BookOpen, Lightbulb, MapPin, ArrowRight } from 'lucide-react';

const TimelinePhaseOverview = () => {
  return (
    <div className="mb-16 relative">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-slate-800 mb-2">3 Chặng Đường Phát Triển</h2>
        <p className="text-slate-500">Tiến trình nhận thức từ những viên gạch đầu tiên đến thực tiễn cách mạng.</p>
      </div>
      
      {/* Visual Connection Line for Desktop */}
      <div className="hidden md:block absolute top-[55%] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-200 via-amber-200 to-emerald-200 rounded-full z-0" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Phase 1 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border-2 border-transparent hover:border-blue-400 hover:shadow-lg transition-all group relative">
          <div className="absolute top-4 right-4 text-slate-200 group-hover:text-blue-100 transition-colors">
            <span className="text-4xl font-black">01</span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform shadow-inner">
            <BookOpen size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors relative z-10">Tiền đề ra đời</h3>
          <p className="text-sm text-slate-500 mb-5 relative z-10">
            Khám phá hoàn cảnh lịch sử, kinh tế, xã hội và tư tưởng làm nền tảng cho sự xuất hiện của CNXHKH.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Từ khóa chính</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-600 rounded-md shadow-sm">KHTN phát triển</span>
              <span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-600 rounded-md shadow-sm">CNXH không tưởng</span>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border-2 border-transparent hover:border-amber-400 hover:shadow-lg transition-all group relative">
          <div className="absolute top-4 right-4 text-slate-200 group-hover:text-amber-100 transition-colors">
            <span className="text-4xl font-black">02</span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform shadow-inner">
            <Lightbulb size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors relative z-10">Hình thành lý luận</h3>
          <p className="text-sm text-slate-500 mb-5 relative z-10">
            Quá trình C. Mác & Ph. Ăngghen biến chủ nghĩa xã hội từ không tưởng trở thành khoa học vũ trang cho giai cấp công nhân.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Từ khóa chính</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-600 rounded-md shadow-sm">Tuyên ngôn ĐCS</span>
              <span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-600 rounded-md shadow-sm">Chủ nghĩa Mác</span>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="rounded-2xl bg-white p-6 shadow-sm border-2 border-transparent hover:border-emerald-400 hover:shadow-lg transition-all group relative">
          <div className="absolute top-4 right-4 text-slate-200 group-hover:text-emerald-100 transition-colors">
            <span className="text-4xl font-black">03</span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-700 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform shadow-inner">
            <MapPin size={28} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors relative z-10">Vận dụng thực tiễn</h3>
          <p className="text-sm text-slate-500 mb-5 relative z-10">
            Quá trình đưa lý luận vào thực tiễn: từ Cách mạng Tháng Mười Nga đến công cuộc Đổi mới đi lên CNXH tại Việt Nam.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Từ khóa chính</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-600 rounded-md shadow-sm">CM Tháng Mười</span>
              <span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-600 rounded-md shadow-sm">Đổi mới Việt Nam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelinePhaseOverview;
