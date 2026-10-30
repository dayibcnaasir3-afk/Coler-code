import React from 'react';
import { Language } from '../types';
import { Headphones, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';

interface SupportViewProps {
  language: Language;
}

export const SupportView: React.FC<SupportViewProps> = ({ language }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl mx-auto flex items-center justify-center text-white shadow-xl shadow-cyan-500/20">
          <Headphones className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {language === 'so' ? 'Taageerada & Xiriirka Coler-Code' : 'Coler-Code Support & Contact'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
          {language === 'so'
            ? 'Ma u baahan tahay caawimaad ama su’aal ma qabtaa? Si toos ah nagala soo xiriir WhatsApp ama Email.'
            : 'Need assistance or have a question? Contact us directly via WhatsApp or Email.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* WhatsApp / Phone */}
        <a
          href="https://wa.me/252613666432"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#111827] hover:bg-[#161e31] border border-[#1f293d] hover:border-emerald-500/40 rounded-2xl p-6 transition-all shadow-md group flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-emerald-500/15 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
              {language === 'so' ? 'WhatsApp / Taleefan' : 'WhatsApp / Phone'}
            </h3>
            <p className="text-xs text-slate-300 font-mono">+252 61 366 6432</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:dayibcnaasir3@gmail.com"
          className="bg-[#111827] hover:bg-[#161e31] border border-[#1f293d] hover:border-cyan-500/40 rounded-2xl p-6 transition-all shadow-md group flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-cyan-500/15 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
              {language === 'so' ? 'Iimaylka Rasmiga ah' : 'Official Email'}
            </h3>
            <p className="text-xs text-slate-300 font-mono">dayibcnaasir3@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  );
};
