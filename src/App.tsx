import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Language, TranslationSet } from './types';
import { translations } from './data/translations';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { LandingView } from './components/LandingView';
import { StepView } from './components/StepView';
import { CompletionView } from './components/CompletionView';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [currentView, setCurrentView] = useState<'landing' | 'step' | 'complete'>('landing');
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});

  const stepContentRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const t: TranslationSet = useMemo(() => {
    return translations[language] || translations.fr;
  }, [language]);

  const isRtl = language === 'ar';

  // Handle document direction and language attribute
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRtl]);

  // Smooth scroll to step content or top on step index or view changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (currentView === 'step' && stepContentRef.current) {
      stepContentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (currentView === 'landing' || currentView === 'complete') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [currentStepIndex, currentView]);

  // Calculate task counts
  const totalTasksCount = useMemo(() => {
    return t.steps.reduce((acc, s) => acc + s.subSteps.length, 0);
  }, [t.steps]);

  const checkedCount = useMemo(() => {
    let count = 0;
    t.steps.forEach((s) => {
      s.subSteps.forEach((sub) => {
        if (checkedTasks[sub.id]) count++;
      });
    });
    return count;
  }, [t.steps, checkedTasks]);

  // Determine completed step indices (all substeps checked in that step)
  const completedStepIndices = useMemo(() => {
    const indices: number[] = [];
    t.steps.forEach((step, idx) => {
      if (step.subSteps.length > 0 && step.subSteps.every((sub) => checkedTasks[sub.id])) {
        indices.push(idx);
      }
    });
    return indices;
  }, [t.steps, checkedTasks]);

  const handleToggleTask = (taskId: string) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const handleMarkAllForStep = (stepId: string, markDone: boolean) => {
    const targetStep = t.steps.find((s) => s.id === stepId);
    if (!targetStep) return;

    setCheckedTasks((prev) => {
      const updated = { ...prev };
      targetStep.subSteps.forEach((sub) => {
        updated[sub.id] = markDone;
      });
      return updated;
    });
  };

  const handleStartGuide = () => {
    setCurrentStepIndex(0);
    setCurrentView('step');
  };

  const handleSelectStep = (index: number) => {
    setCurrentStepIndex(index);
    setCurrentView('step');
  };

  const handleNextStep = () => {
    if (currentStepIndex < t.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setCurrentView('complete');
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else {
      setCurrentView('landing');
    }
  };

  const handleRestart = () => {
    setCheckedTasks({});
    setCurrentStepIndex(0);
    setCurrentView('landing');
  };

  return (
    <div className={`min-flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F2A4A] flex flex-col justify-between ${isRtl ? 'rtl' : 'ltr'}`}>
      <div>
        {/* Navigation Top Header */}
        <Header
          currentLanguage={language}
          onLanguageChange={(lang) => setLanguage(lang)}
          onGoHome={() => setCurrentView('landing')}
          isHome={currentView === 'landing'}
          t={t}
        />

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 w-full">
          {/* Progress Bar (Visible in step view and completion view) */}
          {currentView !== 'landing' && (
            <ProgressBar
              steps={t.steps}
              currentStepIndex={currentView === 'complete' ? 4 : currentStepIndex}
              completedStepIndices={completedStepIndices}
              checkedTasks={checkedTasks}
              onSelectStep={handleSelectStep}
              checkedCount={checkedCount}
              totalTasksCount={totalTasksCount}
              isRtl={isRtl}
              notStartedBadgeLabel={t.notStartedBadge}
              activeBadgeLabel={t.activeBadge}
              completedBadgeLabel={t.completedBadge}
            />
          )}

          {/* Dynamic Views */}
          {currentView === 'landing' && (
            <LandingView
              t={t}
              lang={language}
              onStart={handleStartGuide}
            />
          )}

          {currentView === 'step' && (
            <StepView
              step={t.steps[currentStepIndex]}
              stepIndex={currentStepIndex}
              totalSteps={t.steps.length}
              checkedTasks={checkedTasks}
              onToggleTask={handleToggleTask}
              onMarkAllForStep={handleMarkAllForStep}
              onNext={handleNextStep}
              onPrev={handlePrevStep}
              t={t}
              lang={language}
              containerRef={stepContentRef}
            />
          )}

          {currentView === 'complete' && (
            <CompletionView
              t={t}
              lang={language}
              checkedTasks={checkedTasks}
              onRestart={handleRestart}
              onSelectStep={handleSelectStep}
            />
          )}
        </main>
      </div>

      {/* Global Clean Footer */}
      <Footer t={t} lang={language} />
    </div>
  );
}
