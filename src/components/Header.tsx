import React from 'react';
import { AmplifyLogo } from './AmplifyLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Language, TranslationSet } from '../types';
import { Home, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onGoHome: () => void;
  isHome: boolean;
  t: TranslationSet;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  onGoHome,
  isHome,
  t
}) => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        {/* Brand & Home trigger */}
        <button
          type="button"
          onClick={onGoHome}
          className="flex items-center gap-3 text-start hover:opacity-90 transition-opacity cursor-pointer"
          title="Retour à l'accueil"
          id="header-brand-btn"
        >
          <AmplifyLogo size="sm" showText={true} />
        </button>

        {/* Right Actions: Language Switcher & Home Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {!isHome && (
            <button
              type="button"
              onClick={onGoHome}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-600 hover:text-[#0F2A4A] hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
              title="Accueil"
              id="header-home-btn"
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </button>
          )}

          {/* Language Selector */}
          <LanguageSwitcher
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </header>
  );
};
