import React from 'react';
import { Store, BarChart3, Search, Megaphone, Check } from 'lucide-react';
import { StepData } from '../types';
import { motion } from 'motion/react';

interface ProgressBarProps {
  steps: StepData[];
  currentStepIndex: number;
  completedStepIndices: number[];
  checkedTasks: Record<string, boolean>;
  onSelectStep: (index: number) => void;
  checkedCount: number;
  totalTasksCount: number;
  isRtl: boolean;
  notStartedBadgeLabel: string;
  activeBadgeLabel: string;
  completedBadgeLabel: string;
}

const getStepIcon = (iconName: StepData['iconName']) => {
  switch (iconName) {
    case 'store':
      return Store;
    case 'chart':
      return BarChart3;
    case 'search':
      return Search;
    case 'ads':
      return Megaphone;
    default:
      return Store;
  }
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  steps,
  currentStepIndex,
  completedStepIndices,
  checkedTasks,
  onSelectStep,
  checkedCount,
  totalTasksCount,
  isRtl,
  notStartedBadgeLabel,
  activeBadgeLabel,
  completedBadgeLabel
}) => {
  const overallPercentage = totalTasksCount > 0
    ? Math.round((checkedCount / totalTasksCount) * 100)
    : 0;

  return (
    <div
      className="w-full bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-xs mb-8 transition-all"
      id="guided-progress-container"
    >
      {/* Top Header Row with Completion Percentage */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#22A366] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F2A4A]">
            {isRtl ? 'مسار الإعداد التفاعلي' : 'Parcours de configuration'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-500">
            {checkedCount} / {totalTasksCount} {isRtl ? 'مكتمل' : 'validées'}
          </span>
          <div className="px-2.5 py-1 rounded-full bg-[#EBF8F1] border border-[#22A366]/30 text-[#22A366] text-xs font-bold">
            {overallPercentage}%
          </div>
        </div>
      </div>

      {/* Progress Track Line */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-5">
        <motion.div
          className="h-full bg-[#22A366] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${overallPercentage}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* 4 Stepper Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" role="tablist" aria-label="Étapes du guide">
        {steps.map((step, idx) => {
          const StepIcon = getStepIcon(step.iconName);
          const totalInStep = step.subSteps.length;
          const checkedInStep = step.subSteps.filter((sub) => checkedTasks[sub.id]).length;
          const isStepComplete = (totalInStep > 0 && checkedInStep === totalInStep) || completedStepIndices.includes(idx);
          const isCurrent = currentStepIndex === idx;
          const isInProgress = (isCurrent || checkedInStep > 0) && !isStepComplete;
          const isNotStarted = !isStepComplete && !isInProgress;

          // Compute styling classes per state
          let containerClasses = 'relative flex items-center gap-3 p-3 sm:p-3.5 rounded-xl text-start transition-all cursor-pointer select-none ';
          if (isStepComplete) {
            containerClasses += isCurrent
              ? 'bg-[#22A366] text-white border border-[#19804e] shadow-md ring-2 ring-[#0F2A4A] ring-offset-2 ring-offset-[#F8FAFC]'
              : 'bg-[#22A366] text-white border border-[#19804e] shadow-xs hover:bg-[#1b8c55]';
          } else if (isInProgress) {
            containerClasses += isCurrent
              ? 'bg-[#0F2A4A] text-white border-2 border-[#22A366] shadow-md ring-2 ring-[#22A366]/40'
              : 'bg-white text-[#0F2A4A] border-2 border-[#22A366] shadow-xs hover:bg-[#EBF8F1]/40';
          } else {
            // isNotStarted
            containerClasses += 'bg-slate-50 border border-slate-200 text-slate-500 hover:bg-slate-100/90 hover:text-slate-700 hover:border-slate-300';
          }

          return (
            <button
              key={step.id}
              id={`step-indicator-${step.id}`}
              type="button"
              onClick={() => onSelectStep(idx)}
              className={containerClasses}
              aria-current={isCurrent ? 'step' : undefined}
            >
              {/* Icon Container: Checkmark if Complete, Step Icon otherwise */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                  isStepComplete
                    ? 'bg-white text-[#22A366] shadow-xs'
                    : isCurrent
                    ? 'bg-[#22A366] text-white shadow-xs scale-105'
                    : isInProgress
                    ? 'bg-[#EBF8F1] text-[#22A366] border border-[#22A366]/30'
                    : 'bg-white text-slate-400 border border-slate-200'
                }`}
              >
                {isStepComplete ? (
                  <Check className="w-5 h-5 stroke-[2.5]" />
                ) : (
                  <StepIcon className="w-5 h-5" />
                )}
              </div>

              {/* Step Info & Status Pill */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <span
                    className={`text-[10px] font-bold tracking-wider uppercase ${
                      isStepComplete
                        ? 'text-emerald-100'
                        : isCurrent
                        ? 'text-emerald-300'
                        : isInProgress
                        ? 'text-[#22A366]'
                        : 'text-slate-400'
                    }`}
                  >
                    {isRtl ? `الخطوة ${step.stepNumber}` : `Étape ${step.stepNumber}`}
                  </span>

                  {/* Status Indicator Badge */}
                  {isStepComplete ? (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-white/20 text-white flex-shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                      {completedBadgeLabel}
                    </span>
                  ) : isInProgress ? (
                    <span
                      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-bold flex-shrink-0 ${
                        isCurrent
                          ? 'bg-[#22A366]/30 text-emerald-300 border border-[#22A366]/50'
                          : 'bg-[#EBF8F1] text-[#22A366] border border-[#22A366]/40'
                      }`}
                    >
                      {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#22A366] animate-pulse" />}
                      {activeBadgeLabel}
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-semibold bg-slate-200/80 text-slate-500 border border-slate-300/40 flex-shrink-0">
                      {notStartedBadgeLabel}
                    </span>
                  )}
                </div>

                <div
                  className={`text-xs font-bold truncate ${
                    isStepComplete
                      ? 'text-white'
                      : isCurrent
                      ? 'text-white'
                      : isInProgress
                      ? 'text-[#0F2A4A]'
                      : 'text-slate-600'
                  }`}
                  title={step.name}
                >
                  {step.name}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
