import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { chaptersData } from '../../data/chaptersData';
import { flashcardsData } from '../../data/flashcardsData';
import { caseLabData } from '../../data/caseLabData';
import { ProgressBar, Flashcard, CaseStudy } from '../../components/theory';
import { getProgress, updateProgress } from '../../utils/progressStorage';

const ChapterDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('theory'); // theory, flashcards, cases
  const [progress, setProgress] = useState({ theoryCompleted: false, flashcardsCompleted: false, caseStudyCompleted: false, completionPercentage: 0 });

  const chapter = chaptersData.find(c => c.id === id);
  const chapterFlashcards = flashcardsData.filter(fc => fc.chapterId === id);
  const chapterCases = caseLabData.filter(c => c.chapterId === id);

  useEffect(() => {
    if (chapter) {
      setProgress(getProgress(chapter.id));
    }
  }, [chapter]);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Không tìm thấy chương</h2>
          <button onClick={() => navigate('/theory')} className="text-blue-600 hover:underline">Quay lại Dashboard</button>
        </div>
      </div>
    );
  }

  const handleTheoryComplete = () => {
    const newProgress = updateProgress(id, 'theoryCompleted', true);
    setProgress(newProgress);
    alert('Đã hoàn thành lý thuyết!');
  };

  const handleFlashcardResult = (isCorrect) => {
    // In a real app, track individual flashcards. Here we just mark completed if they interact.
    const newProgress = updateProgress(id, 'flashcardsCompleted', true);
    setProgress(newProgress);
  };

  const handleCaseComplete = (isCorrect) => {
    const newProgress = updateProgress(id, 'caseStudyCompleted', true);
    setProgress(newProgress);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/theory')} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft size={20} /> Quay lại
          </button>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            Chương {chapter.chapterNumber}
          </div>
          <div className="w-24">
            <ProgressBar progress={progress.completionPercentage} color={chapter.color} label={true} />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Area */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-snug">
            {chapter.title}
          </h1>
          <p className="text-lg text-slate-600">
            {chapter.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-xl shadow-sm border p-1">
            <button 
              onClick={() => setActiveTab('theory')}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'theory' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <BookOpen size={18} /> Lý thuyết lõi
            </button>
            <button 
              onClick={() => setActiveTab('flashcards')}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'flashcards' ? 'bg-purple-50 text-purple-700' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <Layers size={18} /> Flashcards ({chapterFlashcards.length})
            </button>
            <button 
              onClick={() => setActiveTab('cases')}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'cases' ? 'bg-amber-50 text-amber-700' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <AlertCircle size={18} /> Case Lab ({chapterCases.length})
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">
          
          {/* THEORY TAB */}
          {activeTab === 'theory' && (
            <div className="space-y-12">
              {chapter.sections.map((section, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-10 last:border-0 last:pb-0">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm">{idx + 1}</span>
                    {section.title}
                  </h3>
                  
                  <div className="prose prose-slate max-w-none mb-6">
                    <ul className="space-y-3">
                      {section.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={20} />
                          <span className="text-slate-700 text-lg">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {section.visualSuggestion && (
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6 flex gap-4 items-start">
                      <div className="text-slate-400 mt-1"><Layers size={20}/></div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Gợi ý trực quan</h4>
                        <p className="text-slate-700 font-medium">{section.visualSuggestion.type}: {section.visualSuggestion.description}</p>
                      </div>
                    </div>
                  )}

                  {section.checkQuestion && (
                    <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <AlertCircle size={18} /> Cầu hỏi ôn tập nhanh
                      </h4>
                      <p className="text-slate-700 font-medium">{section.checkQuestion}</p>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-6 flex justify-center">
                <button 
                  onClick={handleTheoryComplete}
                  disabled={progress.theoryCompleted}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${progress.theoryCompleted ? 'bg-green-100 text-green-700 shadow-none cursor-default' : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200 hover:-translate-y-1'}`}
                >
                  {progress.theoryCompleted ? 'Đã hoàn thành lý thuyết' : 'Đánh dấu hoàn thành lý thuyết'}
                </button>
              </div>
            </div>
          )}

          {/* FLASHCARDS TAB */}
          {activeTab === 'flashcards' && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Thẻ nhớ nhanh (Flashcards)</h3>
                <p className="text-slate-600">Lật thẻ để ôn tập các khái niệm quan trọng trong chương này.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapterFlashcards.map(fc => (
                  <Flashcard key={fc.id} card={fc} onResult={handleFlashcardResult} />
                ))}
              </div>
            </div>
          )}

          {/* CASES TAB */}
          {activeTab === 'cases' && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Case Study Lab</h3>
                <p className="text-slate-600">Vận dụng lý luận vào các tình huống thực tiễn.</p>
              </div>
              <div className="space-y-10">
                {chapterCases.map(c => (
                  <CaseStudy key={c.id} caseData={c} onComplete={handleCaseComplete} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;
