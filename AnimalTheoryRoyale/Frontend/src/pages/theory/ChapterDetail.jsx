import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { chaptersData } from '../../data/chaptersData';
import { flashcardsData } from '../../data/flashcardsData';
import { caseLabData } from '../../data/caseLabData';
import { ProgressBar, Flashcard, CaseStudy } from '../../components/theory';
import { getChapterProgress, updateProgress } from '../../utils/progressStorage';
import ErrorBoundary from '../../components/ErrorBoundary';
import EmptyState from '../../components/EmptyState';

const ChapterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('theory'); 
  const [progress, setProgress] = useState({ theoryCompleted: false, flashcardsCompleted: false, caseStudyCompleted: false, completionPercentage: 0 });

  const safeChaptersData = Array.isArray(chaptersData) ? chaptersData : [];
  const safeFlashcardsData = Array.isArray(flashcardsData) ? flashcardsData : [];
  const safeCaseLabData = Array.isArray(caseLabData) ? caseLabData : [];

  const chapter = useMemo(() => safeChaptersData.find(c => c.id === id), [safeChaptersData, id]);
  const chapterFlashcards = useMemo(() => safeFlashcardsData.filter(fc => fc.chapterId === id), [safeFlashcardsData, id]);
  const chapterCases = useMemo(() => safeCaseLabData.filter(c => c.chapterId === id), [safeCaseLabData, id]);

  useEffect(() => {
    if (chapter) {
      setProgress(getChapterProgress(chapter.id));
    }
  }, [chapter]);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col relative">
        <button onClick={() => navigate('/theory')} className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10 flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors">
          <ArrowLeft size={20} /> Về Dashboard
        </button>
        <EmptyState title="Không tìm thấy nội dung chương này" description="Vui lòng kiểm tra lại đường dẫn hoặc quay lại trang chủ." />
      </div>
    );
  }

  const handleTheoryComplete = () => {
    const newProgress = updateProgress(id, 'theoryCompleted', true);
    setProgress(newProgress);
    alert('Đã hoàn thành lý thuyết!');
  };

  const handleFlashcardResult = () => {
    const newProgress = updateProgress(id, 'flashcardsCompleted', true);
    setProgress(newProgress);
  };

  const handleCaseComplete = () => {
    const newProgress = updateProgress(id, 'caseStudyCompleted', true);
    setProgress(newProgress);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
        {/* Header */}
        <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <button onClick={() => navigate('/theory')} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
              <ArrowLeft size={20} /> <span className="hidden sm:inline">Quay lại</span>
            </button>
            <div className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider text-center">
              Chương {chapter.chapterNumber}
            </div>
            <div className="w-20 sm:w-24">
              <ProgressBar progress={progress.completionPercentage} color={chapter.color || '#3b82f6'} label={true} />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Title Area */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
              {chapter.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              {chapter.description}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap justify-center bg-white rounded-xl shadow-sm border p-1 gap-1">
              <button 
                onClick={() => setActiveTab('theory')}
                className={`px-4 sm:px-6 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'theory' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <BookOpen size={18} className="shrink-0" /> <span className="hidden sm:inline">Lý thuyết lõi</span>
              </button>
              <button 
                onClick={() => setActiveTab('flashcards')}
                className={`px-4 sm:px-6 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'flashcards' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Layers size={18} className="shrink-0" /> <span>Flashcards ({chapterFlashcards.length})</span>
              </button>
              <button 
                onClick={() => setActiveTab('cases')}
                className={`px-4 sm:px-6 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${activeTab === 'cases' ? 'bg-amber-50 text-amber-700' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <AlertCircle size={18} className="shrink-0" /> <span>Case Lab ({chapterCases.length})</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-4 sm:p-6 md:p-10">
            
            {/* THEORY TAB */}
            {activeTab === 'theory' && (
              <div className="space-y-12">
                {chapter.sections && chapter.sections.length > 0 ? chapter.sections.map((section, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-10 last:border-0 last:pb-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-start sm:items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm shrink-0">{idx + 1}</span>
                      {section.title}
                    </h3>
                    
                    <div className="prose prose-slate max-w-none mb-6">
                      <ul className="space-y-3 pl-0">
                        {section.keyPoints && section.keyPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                            <span className="text-slate-700 text-base sm:text-lg">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {section.visualSuggestion && (
                      <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100 mb-6 flex gap-4 items-start">
                        <div className="text-slate-400 mt-1"><Layers size={20}/></div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Gợi ý trực quan</h4>
                          <p className="text-slate-700 font-medium text-sm sm:text-base">{section.visualSuggestion.type}: {section.visualSuggestion.description}</p>
                        </div>
                      </div>
                    )}

                    {section.checkQuestion && (
                      <div className="bg-blue-50/50 rounded-xl p-4 sm:p-6 border border-blue-100">
                        <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2 text-sm sm:text-base">
                          <AlertCircle size={18} /> Câu hỏi ôn tập nhanh
                        </h4>
                        <p className="text-slate-700 font-medium text-sm sm:text-base">{section.checkQuestion}</p>
                      </div>
                    )}
                  </div>
                )) : <EmptyState title="Không có lý thuyết" />}
                
                <div className="pt-6 flex justify-center">
                  <button 
                    onClick={handleTheoryComplete}
                    disabled={progress.theoryCompleted}
                    className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-lg w-full sm:w-auto ${progress.theoryCompleted ? 'bg-green-100 text-green-700 shadow-none cursor-default' : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200 hover:-translate-y-1'}`}
                  >
                    {progress.theoryCompleted ? 'Đã hoàn thành lý thuyết' : 'Đánh dấu hoàn thành'}
                  </button>
                </div>
              </div>
            )}

            {/* FLASHCARDS TAB */}
            {activeTab === 'flashcards' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Thẻ nhớ nhanh (Flashcards)</h3>
                  <p className="text-sm sm:text-base text-slate-600">Lật thẻ để ôn tập các khái niệm quan trọng trong chương này.</p>
                </div>
                {chapterFlashcards.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chapterFlashcards.map(fc => (
                      <Flashcard key={fc.id} card={fc} onResult={handleFlashcardResult} />
                    ))}
                  </div>
                ) : <EmptyState title="Không có Flashcard nào cho chương này" />}
              </div>
            )}

            {/* CASES TAB */}
            {activeTab === 'cases' && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">Case Study Lab</h3>
                  <p className="text-sm sm:text-base text-slate-600">Vận dụng lý luận vào các tình huống thực tiễn.</p>
                </div>
                {chapterCases.length > 0 ? (
                  <div className="space-y-10">
                    {chapterCases.map(c => (
                      <CaseStudy key={c.id} caseData={c} onComplete={handleCaseComplete} />
                    ))}
                  </div>
                ) : <EmptyState title="Không có Case Study nào cho chương này" />}
              </div>
            )}

          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ChapterDetail;
