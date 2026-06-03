const STORAGE_KEY = "cnxhkh_progress";

function getDefaultProgress() {
  return {
    completedSections: {},
    completedChapters: [],
    understoodConcepts: [],
    viewedTimelineEvents: [],
    completedCases: [],
    completedDebates: [],
    flashcardMemory: {},
    quizHistory: [],
    wrongQuestions: [],
    lastLearningPath: "/theory/journey",
    updatedAt: null
  };
}

export function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const parsed = JSON.parse(raw);
    return { ...getDefaultProgress(), ...parsed };
  } catch { return getDefaultProgress(); }
}

export function saveProgress(progress) {
  try {
    progress.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {}
}

export function markSectionCompleted(chapterId, sectionId) {
  try {
    const p = getProgress();
    if (!p.completedSections[chapterId]) p.completedSections[chapterId] = [];
    if (!p.completedSections[chapterId].includes(sectionId)) p.completedSections[chapterId].push(sectionId);
    saveProgress(p);
  } catch {}
}

export function markChapterCompleted(chapterId) {
  try {
    const p = getProgress();
    if (!p.completedChapters.includes(chapterId)) p.completedChapters.push(chapterId);
    saveProgress(p);
  } catch {}
}

export function markConceptUnderstood(conceptId) {
  try {
    const p = getProgress();
    if (!p.understoodConcepts.includes(conceptId)) p.understoodConcepts.push(conceptId);
    saveProgress(p);
  } catch {}
}

export function markTimelineViewed(eventId) {
  try {
    const p = getProgress();
    if (!p.viewedTimelineEvents.includes(eventId)) p.viewedTimelineEvents.push(eventId);
    saveProgress(p);
  } catch {}
}

export function markCaseCompleted(caseId) {
  try {
    const p = getProgress();
    if (!p.completedCases.includes(caseId)) p.completedCases.push(caseId);
    saveProgress(p);
  } catch {}
}

export function markDebateViewed(debateId) {
  try {
    const p = getProgress();
    if (!p.completedDebates.includes(debateId)) p.completedDebates.push(debateId);
    saveProgress(p);
  } catch {}
}

export function markFlashcardRemembered(cardId) {
  try {
    const p = getProgress();
    p.flashcardMemory[cardId] = "remembered";
    saveProgress(p);
  } catch {}
}

export function markFlashcardNotRemembered(cardId) {
  try {
    const p = getProgress();
    p.flashcardMemory[cardId] = "not_remembered";
    saveProgress(p);
  } catch {}
}

export function saveQuizResult(result) {
  try {
    const p = getProgress();
    p.quizHistory.push({ ...result, timestamp: new Date().toISOString() });
    if (p.quizHistory.length > 50) p.quizHistory = p.quizHistory.slice(-50);
    saveProgress(p);
  } catch {}
}

export function saveWrongQuestion(questionId) {
  try {
    const p = getProgress();
    if (!p.wrongQuestions.includes(questionId)) p.wrongQuestions.push(questionId);
    saveProgress(p);
  } catch {}
}

export function removeWrongQuestion(questionId) {
  try {
    const p = getProgress();
    p.wrongQuestions = p.wrongQuestions.filter(q => q !== questionId);
    saveProgress(p);
  } catch {}
}

export function getLastLearningPath() {
  try { return getProgress().lastLearningPath || "/theory/journey"; } catch { return "/theory/journey"; }
}

export function setLastLearningPath(path) {
  try { const p = getProgress(); p.lastLearningPath = path; saveProgress(p); } catch {}
}

export function resetProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(getDefaultProgress())); } catch {}
}
