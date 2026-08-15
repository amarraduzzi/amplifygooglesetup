import React from 'react';
import { StepData, TranslationSet, Language } from '../types';
import { motion } from 'motion/react';
import {
  Check,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  CheckCheck,
  RotateCcw,
  Clock,
  Store,
  BarChart3,
  Search,
  Megaphone,
  Globe,
  Building2,
  MapPin,
  Phone,
  ShieldCheck,
  Camera,
  FileText,
  Star,
  PlusCircle,
  Sliders,
  Code2,
  Radio,
  FileCode2,
  TrendingUp,
  Target,
  PenTool,
  Coins
} from 'lucide-react';

interface StepViewProps {
  step: StepData;
  stepIndex: number;
  totalSteps: number;
  checkedTasks: Record<string, boolean>;
  onToggleTask: (taskId: string) => void;
  onMarkAllForStep: (stepId: string, markDone: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
  t: TranslationSet;
  lang: Language;
  containerRef?: React.RefObject<HTMLDivElement | null>;
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

const getSubStepIcon = (id: string) => {
  switch (id) {
    // Google Business Profile
    case 'gbp-1':
      return Globe;
    case 'gbp-2':
      return Building2;
    case 'gbp-3':
      return MapPin;
    case 'gbp-4':
      return Phone;
    case 'gbp-5':
      return ShieldCheck;
    case 'gbp-6':
      return Camera;
    case 'gbp-7':
      return FileText;
    case 'gbp-8':
      return Star;

    // Google Analytics 4
    case 'ga4-1':
      return Globe;
    case 'ga4-2':
      return PlusCircle;
    case 'ga4-3':
      return Sliders;
    case 'ga4-4':
      return Code2;
    case 'ga4-5':
      return Radio;

    // Google Search Console
    case 'gsc-1':
      return Globe;
    case 'gsc-2':
      return PlusCircle;
    case 'gsc-3':
      return FileCode2;
    case 'gsc-4':
      return TrendingUp;

    // Google Ads
    case 'ads-1':
      return PlusCircle;
    case 'ads-2':
      return Target;
    case 'ads-3':
      return PenTool;
    case 'ads-4':
      return Coins;

    default:
      return Globe;
  }
};

export const StepView: React.FC<StepViewProps> = ({
  step,
  stepIndex,
  totalSteps,
  checkedTasks,
  onToggleTask,
  onMarkAllForStep,
  onNext,
  onPrev,
  t,
  lang,
  containerRef
}) => {
  const isRtl = lang === 'ar';
  const NextArrow = isRtl ? ArrowLeft : ArrowRight;
  const PrevArrow = isRtl ? ArrowRight : ArrowLeft;
  const StepIcon = getStepIcon(step.iconName);

  const completedInThisStep = step.subSteps.filter((s) => checkedTasks[s.id]).length;
  const totalInThisStep = step.subSteps.length;
  const isStepFullyDone = completedInThisStep === totalInThisStep;

  return (
    <motion.div
      key={step.id}
      ref={containerRef}
      initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto scroll-mt-24"
      id={`step-card-${step.id}`}
    >
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs relative">
        {/* Top Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EBF8F1] text-[#22A366] flex items-center justify-center flex-shrink-0">
              <StepIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#22A366]">
                {isRtl ? `الخطوة ${step.stepNumber} من ${totalSteps}` : `Étape ${step.stepNumber} sur ${totalSteps}`}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-0.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{step.timeEstimate}</span>
              </div>
            </div>
          </div>

          {/* Direct Link to Google Official Tool */}
          <a
            href={step.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#0F2A4A] border border-slate-200 text-xs font-bold transition-colors cursor-pointer"
            id={`open-link-${step.id}`}
          >
            <span>{step.officialUrlLabel}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Step Title & Subtitle */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A4A] tracking-tight mb-2">
            {step.name}
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-500 mb-3">
            {step.tagline}
          </p>
          
          {/* Friendly short explanation box */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-[#0F2A4A] text-sm sm:text-base leading-relaxed">
            {step.description}
          </div>
        </div>

        {/* Sub-steps Checklist Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pt-2">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F2A4A]">
              {isRtl ? 'قائمة المهام التنفيذية' : 'Actions à réaliser'}
            </h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
              {completedInThisStep}/{totalInThisStep}
            </span>
          </div>

          {/* Quick Mark/Unmark All */}
          <button
            type="button"
            onClick={() => onMarkAllForStep(step.id, !isStepFullyDone)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22A366] hover:text-[#1B8C55] transition-colors cursor-pointer"
          >
            {isStepFullyDone ? (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.resetStep}</span>
              </>
            ) : (
              <>
                <CheckCheck className="w-3.5 h-3.5" />
                <span>{t.markAllDone}</span>
              </>
            )}
          </button>
        </div>

        {/* Sub-steps Interactive List */}
        <div className="space-y-3.5 mb-8" role="list">
          {step.subSteps.map((subStep, idx) => {
            const isChecked = !!checkedTasks[subStep.id];
            const ContextIcon = getSubStepIcon(subStep.id);
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={subStep.id}
                id={`task-item-${subStep.id}`}
                onClick={() => onToggleTask(subStep.id)}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.995 }}
                transition={{ duration: 0.15 }}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    onToggleTask(subStep.id);
                  }
                }}
                className={`group flex items-start gap-3.5 sm:gap-4 p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 cursor-pointer select-none shadow-2xs hover:shadow-sm ${
                  isChecked
                    ? 'bg-[#EBF8F1]/65 border-[#22A366]/40 text-slate-800'
                    : isEven
                    ? 'bg-white hover:bg-slate-50 border-slate-200/90 text-[#0F2A4A]'
                    : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200/80 text-[#0F2A4A]'
                }`}
              >
                {/* Interactive Numbered / Checkbox Circle with Pop Animation */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs sm:text-sm transition-all duration-200 ${
                    isChecked
                      ? 'bg-[#22A366] text-white shadow-xs'
                      : 'bg-white text-[#0F2A4A] border-2 border-[#0F2A4A]/25 group-hover:border-[#22A366] group-hover:text-[#22A366]'
                  }`}
                >
                  {isChecked ? (
                    <motion.div
                      key="checked"
                      initial={{ scale: 0.4, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                    >
                      <Check className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[3]" />
                    </motion.div>
                  ) : (
                    <span className="tabular-nums">{subStep.number}</span>
                  )}
                </div>

                {/* Sub-step Content with Contextual Icon */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-start gap-2">
                    {/* Small Contextual Icon matching the specific action */}
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-[#22A366]/15 text-[#22A366]'
                          : 'bg-slate-100/90 text-slate-600 group-hover:bg-[#EBF8F1] group-hover:text-[#22A366]'
                      }`}
                    >
                      <ContextIcon className="w-3.5 h-3.5" />
                    </div>

                    {/* Action Title */}
                    <div
                      className={`text-sm sm:text-base font-semibold leading-snug transition-all duration-150 ${
                        isChecked
                          ? 'text-slate-500 line-through decoration-slate-400/80'
                          : 'text-[#0F2A4A]'
                      }`}
                    >
                      {subStep.title}
                    </div>
                  </div>

                  {/* Detail explanation */}
                  {subStep.detail && (
                    <div
                      className={`text-xs sm:text-sm mt-1.5 leading-relaxed ms-7 transition-colors ${
                        isChecked ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {subStep.detail}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tip Box at bottom */}
        {step.tip && (
          <div
            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 mb-8"
            id={`tip-box-${step.id}`}
          >
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div className="text-xs sm:text-sm leading-relaxed">
              <span className="font-bold block mb-0.5 text-amber-950">
                {t.tipLabel}
              </span>
              {step.tip}
            </div>
          </div>
        )}

        {/* Navigation Footer Controls */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-100">
          <button
            type="button"
            id="prev-step-btn"
            onClick={onPrev}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0F2A4A] text-sm font-semibold transition-all cursor-pointer"
          >
            <PrevArrow className="w-4 h-4" />
            <span>{t.prevStep}</span>
          </button>

          <button
            type="button"
            id="next-step-btn"
            onClick={onNext}
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#22A366] hover:bg-[#1B8C55] text-white text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ring-2 ring-[#22A366]/30"
          >
            <span>{stepIndex === totalSteps - 1 ? t.finishButton : t.nextStep}</span>
            <NextArrow className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
