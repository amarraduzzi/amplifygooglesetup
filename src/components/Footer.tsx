import React from 'react';
import { TranslationSet, Language } from '../types';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  t: TranslationSet;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ t, lang }) => {
  const isRtl = lang === 'ar';

  return (
    <footer className="w-full border-t border-slate-200/80 bg-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#22A366]" />
          <span>
            {isRtl
              ? 'دليل إرشادي مجاني ومستقل بنسبة 100% — لا يتطلب تسجيلاً أو مشاركة بيانات'
              : 'Guide libre et gratuit — 100% local, aucune donnée personnelle collectée'}
          </span>
        </div>

        <div className="text-xs text-slate-400">
          © {new Date().getFullYear()} Amplify Growth Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
