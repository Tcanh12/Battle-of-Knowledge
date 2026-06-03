import React from 'react';
import { ArrowDown } from 'lucide-react';

const TimelineFlow = () => {
  const flowNodes = [
    { text: "Tiền đề kinh tế - xã hội", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { text: "Phong trào công nhân", color: "bg-sky-100 text-sky-800 border-sky-200" },
    { text: "Nhu cầu lý luận khoa học", color: "bg-amber-100 text-amber-800 border-amber-200" },
    { text: "C. Mác và Ph. Ăngghen sáng lập CNXHKH", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { text: "Giai cấp công nhân và cách mạng XHCN", color: "bg-red-100 text-red-800 border-red-200" },
    { text: "Thời kỳ quá độ lên CNXH", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { text: "Vận dụng vào Việt Nam", color: "bg-emerald-100 text-emerald-800 border-emerald-200" }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-12">
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">Dòng chảy logic của môn học</h2>
      <p className="text-center text-slate-500 mb-8 max-w-2xl mx-auto">
        Không cần học thuộc timeline như danh sách năm tháng. Điều quan trọng là hiểu vì sao mỗi mốc xuất hiện, nó giải quyết vấn đề gì và nó làm thay đổi nhận thức về chủ nghĩa xã hội như thế nào.
      </p>
      
      <div className="flex flex-col items-center max-w-lg mx-auto">
        {flowNodes.map((node, index) => (
          <React.Fragment key={index}>
            <div className={`px-6 py-3 rounded-xl border-2 font-bold text-center w-full shadow-sm transition-transform hover:scale-105 cursor-default ${node.color}`}>
              {node.text}
            </div>
            {index < flowNodes.length - 1 && (
              <div className="my-2 text-slate-300">
                <ArrowDown size={24} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TimelineFlow;
