import React from 'react';
import { TranslationSet, Language, StepData } from '../types';
import { motion } from 'motion/react';
import { AmplifyLogo } from './AmplifyLogo';
import {
  CheckCircle2,
  Mail,
  RotateCcw,
  Store,
  BarChart3,
  Search,
  Megaphone,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface CompletionViewProps {
  t: TranslationSet;
  lang: Language;
  checkedTasks: Record<string, boolean>;
  onRestart: () => void;
  onSelectStep: (stepIndex: number) => void;
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

export const CompletionView: React.FC<CompletionViewProps> = ({
  t,
  lang,
  checkedTasks,
  onRestart,
  onSelectStep
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto"
      id="completion-screen"
    >
      {/* Hero Celebration Card */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm text-center relative overflow-hidden mb-8">
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#22A366]" />

        {/* Celebration Badge */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-3xl bg-[#EBF8F1] border-2 border-[#22A366]/40 flex items-center justify-center text-[#22A366] mb-6 shadow-xs">
          <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5]" />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F2A4A] tracking-tight mb-4">
          {t.congratsTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          {t.congratsSubtitle}
        </p>

        {/* 4 Pillars Summary Cards */}
        <div className="text-start border-t border-slate-100 pt-8 mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">
            {t.congratsSummaryTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.steps.map((step, idx) => {
              const StepIcon = getStepIcon(step.iconName);
              const doneCount = step.subSteps.filter((s) => checkedTasks[s.id]).length;
              const totalCount = step.subSteps.length;
              const isAllDone = doneCount === totalCount;

              return (
                <div
                  key={step.id}
                  onClick={() => onSelectStep(idx)}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:bg-white hover:border-[#22A366]/50 hover:shadow-xs transition-all cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isAllDone
                        ? 'bg-[#22A366] text-white'
                        : 'bg-white text-[#0F2A4A] border border-slate-200'
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-sm font-bold text-[#0F2A4A] truncate">
                        {step.name}
                      </h3>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                          isAllDone
                            ? 'bg-[#EBF8F1] text-[#22A366]'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {doneCount}/{totalCount}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {step.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key to Long Term Growth Card */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-start flex items-start gap-4 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[#0F2A4A] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0F2A4A] mb-1">
              {t.congratsTipTitle}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.congratsTipText}
            </p>
          </div>
        </div>

        {/* Contact Amplify Growth Studio section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F2A4A] text-white text-start relative overflow-hidden mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <AmplifyLogo size="sm" showText={true} inverted={true} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {t.contactAmplifyTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.contactAmplifyText}
              </p>
            </div>

            <a
              href="mailto:contact@amplifygrowth.studio?subject=Demande%20d%27accompagnement%20Google%20Setup"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#22A366] hover:bg-[#1B8C55] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex-shrink-0 cursor-pointer"
              id="contact-amplify-btn"
            >
              <Mail className="w-4 h-4" />
              <span>{t.contactButton}</span>
            </a>
          </div>
        </div>

        {/* Restart Button */}
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-slate-500 hover:text-[#0F2A4A] hover:bg-slate-100 text-xs font-bold transition-all cursor-pointer"
          id="restart-guide-btn"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.restartButton}</span>
        </button>
      </div>
    </motion.div>
  );
};
