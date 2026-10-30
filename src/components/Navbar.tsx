import React from 'react';
import { Language, UserProfile } from '../types';
import { Globe, User, ShieldAlert, Settings } from 'lucide-react';

interface NavbarProps {
  user: UserProfile;
  setLanguage: (lang: Language) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, setLanguage, activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/95 backdrop-blur-md border-b border-[#1f293d] px-3 sm:px-4 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-all shrink-0 border-2 border-cyan-500/40 bg-[#0b0f19] flex items-center justify-center">
            <img 
              src="/assets/aistudio/file_0000000063e881f497cd43f797119f2f_93469857.png" 
              alt="Coler-Code Logo" 
              className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-300"
            />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-1">
              Coler<span className="text-cyan-400">-Code</span>
            </h1>
            <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium hidden sm:block">
              Baro Coding, Dhiso Mustaqbalkaaga.
            </p>
          </div>
        </div>

        {/* Right Action Items */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(user.language === 'so' ? 'en' : 'so')}
            className="flex items-center gap-1 bg-[#161e31] hover:bg-[#1f293d] border border-[#2b3752] px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-cyan-300 transition-colors"
            title="Bedel Luqadda / Switch Language"
          >
            <Globe className="w-3 h-3" />
            <span className="uppercase">{user.language}</span>
          </button>

          {/* Settings Button */}
          <button
            onClick={() => setActiveTab('profile')}
            className={`p-1.5 sm:p-2 rounded-xl border transition-colors ${
              activeTab === 'profile' 
                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' 
                : 'bg-[#161e31] border-[#2b3752] text-slate-300 hover:text-white'
            }`}
            title="Settings & Profile"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Admin Button if Admin */}
          <button
            onClick={() => setActiveTab('admin')}
            className={`p-1.5 sm:p-2 rounded-xl border transition-colors ${
              activeTab === 'admin' 
                ? 'bg-purple-600/20 border-purple-500 text-purple-400' 
                : 'bg-[#161e31] border-[#2b3752] text-slate-300 hover:text-white'
            }`}
            title="Admin Panel"
          >
            <ShieldAlert className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
