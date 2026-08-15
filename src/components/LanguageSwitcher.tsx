import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

interface LanguageOption {
  code: Language;
  label: string;
  short: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', short: 'AR', flag: '🇸🇦' },
  { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLang = languages.find((l) => l.code === currentLanguage) || languages[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (langCode: Language) => {
    onLanguageChange(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef} id="language-switcher-wrapper">
      {/* Trigger Button showing Globe + Current Language */}
      <button
        id="language-dropdown-btn"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-[#0F2A4A] shadow-xs transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#22A366]/40"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`Langue actuelle: ${activeLang.label}. Cliquez pour changer de langue.`}
      >
        <Globe className="w-4 h-4 text-slate-500 flex-shrink-0" />
        <span className="flex items-center gap-1.5">
          <span className="text-xs">{activeLang.flag}</span>
          <span className="font-bold tracking-wide">{activeLang.short}</span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-[#0F2A4A]' : ''
          }`}
        />
      </button>

      {/* Vertical Dropdown Menu */}
      {isOpen && (
        <div
          id="language-dropdown-menu"
          role="listbox"
          aria-label="Sélection de la langue"
          className="absolute top-full mt-1.5 end-0 min-w-[170px] bg-white border border-slate-200/90 rounded-xl shadow-lg p-1.5 z-50 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-1 duration-150"
        >
          {languages.map((lang) => {
            const isSelected = currentLanguage === lang.code;
            return (
              <button
                key={lang.code}
                id={`lang-opt-${lang.code}`}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelectLanguage(lang.code)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all text-start cursor-pointer ${
                  isSelected
                    ? 'bg-[#0F2A4A] text-white font-bold shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-[#0F2A4A]'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-sm flex-shrink-0">{lang.flag}</span>
                  <span className="truncate">{lang.label}</span>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span
                    className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {lang.short}
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
