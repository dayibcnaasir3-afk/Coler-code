import React from 'react';
import { Language } from '../types';
import { Home, BookOpen, Code2, FolderGit2, Award, MessageSquare, Headphones } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, language }) => {
  const navItems = [
    { id: 'home', labelSo: 'Bogga', labelEn: 'Home', icon: Home },
    { id: 'courses', labelSo: 'Casharro', labelEn: 'Courses', icon: BookOpen },
    { id: 'playground', labelSo: 'Tijaabin', labelEn: 'Playground', icon: Code2 },
    { id: 'projects', labelSo: 'Mashaariic', labelEn: 'Projects', icon: FolderGit2 },
    { id: 'quizzes', labelSo: 'Layliyo', labelEn: 'Quizzes', icon: Award },
    { id: 'community', labelSo: 'Bulshada', labelEn: 'Community', icon: MessageSquare },
    { id: 'support', labelSo: 'Taageero', labelEn: 'Support', icon: Headphones },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0b0f19]/95 backdrop-blur-xl border-t border-[#1f293d] px-1 sm:px-3 py-2 shadow-2xl">
      <div className="max-w-4xl mx-auto grid grid-cols-7 items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all ${
                isActive
                  ? 'text-cyan-400 scale-105'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`p-1 sm:p-1.5 rounded-xl transition-all ${isActive ? 'bg-cyan-500/20 shadow-sm shadow-cyan-500/30' : ''}`}>
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-tighter truncate w-full text-center">
                {language === 'so' ? item.labelSo : item.labelEn}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
