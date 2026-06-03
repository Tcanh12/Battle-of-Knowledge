import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import PageLoading from './components/PageLoading';

// Standard Game Imports
import LandingPage from './pages/LandingPage';
import CreateRoomPage from './pages/CreateRoomPage';
import JoinRoomPage from './pages/JoinRoomPage';
import HostLobbyPage from './pages/HostLobbyPage';
import PlayerLobbyPage from './pages/PlayerLobbyPage';
import HostDashboardPage from './pages/HostDashboardPage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import NotFoundPage from './pages/NotFoundPage';

// Lazy load Theory Pages to prevent Dashboard lag
const TheoryDashboard = lazy(() => import('./pages/theory/TheoryDashboard'));
const ChapterDetail = lazy(() => import('./pages/theory/ChapterDetail'));
const ConceptGalaxy = lazy(() => import('./pages/theory/ConceptGalaxy'));
const LearningJourney = lazy(() => import('./pages/theory/LearningJourney'));
const FeatureStandalone = lazy(() => import('./pages/theory/FeatureStandalone'));

function App() {
  return (
    <div className="w-full min-h-screen bg-dark text-white overflow-x-hidden">
      <ErrorBoundary>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Host Flow */}
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/host-lobby/:roomCode" element={<HostLobbyPage />} />
          <Route path="/host-dashboard/:roomCode" element={<HostDashboardPage />} />

          {/* Player Flow */}
          <Route path="/join" element={<JoinRoomPage />} />
          <Route path="/player-lobby/:roomCode" element={<PlayerLobbyPage />} />
          <Route path="/game/:roomCode" element={<GamePage />} />
          <Route path="/game" element={<LandingPage />} />

          {/* Shared */}
          <Route path="/result/:roomCode" element={<ResultPage />} />

          {/* Theory / Knowledge Campus */}
          <Route 
            path="/theory/*" 
            element={
              <Suspense fallback={<PageLoading />}>
                <Routes>
                  <Route path="" element={<TheoryDashboard />} />
                  
                  {/* Chapter Detail */}
                  <Route path="chapter/:id" element={<ChapterDetail />} />
                  <Route path="journey/:id" element={<ChapterDetail />} />
                  
                  {/* Galaxy routes */}
                  <Route path="galaxy" element={<ConceptGalaxy />} />
                  <Route path="concept-galaxy" element={<ConceptGalaxy />} />
                  
                  {/* Timeline routes */}
                  <Route path="journey" element={<LearningJourney />} />
                  <Route path="timeline" element={<LearningJourney />} />
                  
                  {/* Standalone feature aliases (redirecting to FeatureStandalone) */}
                  <Route path="case-lab" element={<FeatureStandalone title="Case Lab Tổng Hợp" />} />
                  <Route path="case-lab/:caseId" element={<FeatureStandalone title="Chi tiết Case Study" />} />
                  <Route path="debate-cards" element={<FeatureStandalone title="Thẻ Tranh Biện (Debate)" />} />
                  <Route path="flashcards" element={<FeatureStandalone title="Bộ thẻ nhớ Flashcards" />} />
                  <Route path="review-sprint" element={<FeatureStandalone title="Review Sprint (Ôn Tập Chớp Nhoáng)" />} />
                  
                  {/* Catch all for theory routes */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            } 
          />

          {/* Catch all for main routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
