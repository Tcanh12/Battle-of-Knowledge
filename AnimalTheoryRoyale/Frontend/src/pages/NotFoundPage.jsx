import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-16 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 md:p-12 text-center shadow-sm">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
          Không tìm thấy trang
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Đường dẫn này không tồn tại hoặc đã được thay đổi.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/theory" className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition-colors">
            Về trang học tập
          </Link>
          <Link to="/" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
