import React from 'react';
import { TranslationSet, Language } from '../types';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
  Store,
  BarChart3,
  Search,
  Megaphone,
  Clock,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface LandingViewProps {
  t: TranslationSet;
  lang: Language;
  onStart: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ t, lang, onStart }) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const stepMeta = [
    { icon: Store, name: t.steps[0]?.name || 'Google Business Profile' },
    { icon: BarChart3, name: t.steps[1]?.name || 'Google Analytics 4' },
    { icon: Search, name: t.steps[2]?.name || 'Google Search Console' },
    { icon: Megaphone, name: t.steps[3]?.name || 'Google Ads' },
  ];

  const freeLabel = isRtl
    ? 'مجاني 100% وبدون التزام'
    : lang === 'en'
    ? '100% free & no commitment'
    : '100% gratuit & sans engagement';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="w-full max-w-4xl mx-auto"
      id="landing-hero-screen"
    >
      {/* Main Hero Card */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm text-center relative">
        {/* Header Badges: Audience & Powered by Google Placeholder */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF8F1] border border-[#22A366]/30 text-[#22A366] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>{t.landingAudience}</span>
          </div>

          {/* Dedicated Google Logo Badge */}
          <div
            id="google-powered-badge"
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all select-none"
            title="Google Setup Guide"
          >
            <div
              id="google-logo-container"
              className="w-6 h-6 flex items-center justify-center flex-shrink-0"
            >
              {/* Official Google 'G' 4-color SVG vector */}
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 flex-shrink-0"
                aria-label="Google"
                role="img"
              >
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>
            <span className="text-xs font-semibold text-slate-700 tracking-tight">
              {isRtl ? 'مدعوم من Google' : 'Powered by Google'}
            </span>
          </div>
        </div>

        {/* Main Catchy Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2A4A] tracking-tight leading-[1.2] max-w-2xl mx-auto mb-4">
          {t.landingTitle}
        </h1>

        {/* Short Friendly Subtitle */}
        <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          {t.landingSubtitle}
        </p>

        {/* 4 Pillars Visual Preview (Horizontal row on desktop, 2x2 grid on mobile) */}
        <div className="mb-9">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {stepMeta.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  id={`preview-step-card-${idx + 1}`}
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="group p-3 sm:p-4 rounded-2xl bg-[#EBF8F1]/40 hover:bg-[#EBF8F1] border border-[#22A366]/30 hover:border-[#22A366]/60 transition-all duration-200 flex flex-col items-center justify-center text-center shadow-xs cursor-pointer select-none"
                  onClick={onStart}
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#22A366]/25 text-[#22A366] flex items-center justify-center mb-2.5 shadow-xs transition-transform duration-200 group-hover:scale-110 group-hover:border-[#22A366]/50">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                  </div>

                  <span className="text-[10px] font-bold text-[#22A366] tracking-wider uppercase mb-0.5">
                    {isRtl ? `الخطوة ${idx + 1}` : `Étape ${idx + 1}`}
                  </span>

                  <h3 className="text-xs sm:text-sm font-bold text-[#0F2A4A] leading-tight line-clamp-1">
                    {item.name}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Button & Actions */}
        <div className="flex flex-col items-center justify-center gap-3.5 mb-6">
          <motion.button
            id="start-guide-hero-cta"
            type="button"
            onClick={onStart}
            whileHover={{ scale: 1.025, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-xl bg-[#22A366] hover:bg-[#1B8C55] text-white text-base sm:text-lg font-bold shadow-md hover:shadow-xl transition-all duration-150 cursor-pointer ring-2 ring-[#22A366]/25"
          >
            <span>{t.startButton}</span>
            <ArrowIcon className="w-5 h-5 stroke-[2.5]" />
          </motion.button>

          {/* Duration & Free Guarantee line */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-500 pt-1">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#22A366]" />
              <span>{t.landingDuration}</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-[#22A366] font-semibold">{freeLabel}</span>
          </div>
        </div>

        {/* Subtle Animated Arrow / Scroll Hint */}
        <motion.button
          type="button"
          onClick={onStart}
          aria-label={t.startButton}
          className="inline-flex flex-col items-center justify-center text-slate-400 hover:text-[#22A366] transition-colors cursor-pointer pt-2 group"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-50 group-hover:bg-[#EBF8F1] border border-slate-200/80 group-hover:border-[#22A366]/30 transition-all"
          >
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#22A366] transition-colors" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};
