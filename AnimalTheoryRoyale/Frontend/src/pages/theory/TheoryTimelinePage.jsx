import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import ErrorBoundary from '../../components/ErrorBoundary';
import EmptyState from '../../components/EmptyState';
import { timelineEvents } from '../../data/timelineData';
import { getViewedTimelineEvents, markTimelineViewed } from '../../utils/progressStorage';

import TimelineHero from '../../components/timeline/TimelineHero';
import TimelinePhaseTabs from '../../components/timeline/TimelinePhaseTabs';
import TimelineFlow from '../../components/timeline/TimelineFlow';
import TimelineEventCard from '../../components/timeline/TimelineEventCard';
import TimelineDetailPanel from '../../components/timeline/TimelineDetailPanel';
import TimelineProgress from '../../components/timeline/TimelineProgress';

const TheoryTimelinePage = () => {
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewedEvents, setViewedEvents] = useState([]);

  const safeEvents = Array.isArray(timelineEvents) ? timelineEvents : [];

  useEffect(() => {
    setViewedEvents(getViewedTimelineEvents());
  }, []);

  const handleViewDetail = (event) => {
    setSelectedEvent(event);
    if (!viewedEvents.includes(event.id)) {
      markTimelineViewed(event.id);
      setViewedEvents(getViewedTimelineEvents());
    }
  };

  const filteredEvents = useMemo(() => {
    return safeEvents.filter(event => {
      const matchPhase = activePhase === 'all' || event.phase === activePhase;
      const q = searchQuery.toLowerCase();
      const matchSearch = q === '' || 
        event.title?.toLowerCase().includes(q) || 
        event.shortDescription?.toLowerCase().includes(q) ||
        event.relatedConcepts?.some(c => c.toLowerCase().includes(q)) ||
        event.relatedChapters?.some(c => c.toLowerCase().includes(q));
        
      return matchPhase && matchSearch;
    });
  }, [activePhase, searchQuery, safeEvents]);

  if (safeEvents.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col relative">
        <button onClick={() => navigate('/theory')} className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10 flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors">
          <ArrowLeft size={20} /> Về Dashboard
        </button>
        <EmptyState title="Nội dung timeline đang được cập nhật." />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 font-sans">
        {/* Header */}
        <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <button onClick={() => navigate('/theory')} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium">
              <ArrowLeft size={20} /> <span className="hidden sm:inline">Về Dashboard</span>
            </button>
            <div className="font-bold text-slate-800">
              Dòng chảy lịch sử
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <TimelineHero />
          
          <TimelineProgress total={safeEvents.length} viewed={viewedEvents.length} />

          {/* Search & Filter Controls */}
          <div className="mb-12">
            <TimelinePhaseTabs activePhase={activePhase} onPhaseChange={setActivePhase} />
            
            <div className="relative max-w-xl mx-auto mt-6">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search size={20} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm mốc sự kiện, từ khóa, concept..."
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <TimelineFlow />

          {/* Main Timeline Content */}
          <div className="relative mt-16">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-slate-200 transform md:-translate-x-1/2 rounded-full hidden md:block" />

            <div className="flex flex-col gap-8 md:gap-4">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <TimelineEventCard 
                    key={event.id} 
                    event={event} 
                    isEven={index % 2 === 0} 
                    isViewed={viewedEvents.includes(event.id)}
                    onViewDetail={handleViewDetail} 
                  />
                ))
              ) : (
                <div className="py-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-100 shadow-sm max-w-2xl mx-auto w-full">
                  Không tìm thấy mốc timeline phù hợp.
                </div>
              )}
            </div>
          </div>
        </div>

        <TimelineDetailPanel 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      </div>
    </ErrorBoundary>
  );
};

export default TheoryTimelinePage;
