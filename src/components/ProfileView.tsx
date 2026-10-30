import React, { useState } from 'react';
import { UserProfile, Language } from '../types';
import { User, Globe, Shield, RotateCcw, Check, Sparkles, ArrowLeft } from 'lucide-react';

interface ProfileViewProps {
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  language: Language;
  setLanguage: (lang: Language) => void;
  setActiveTab: (tab: string) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  user,
  setUser,
  language,
  setLanguage,
  setActiveTab,
}) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ ...user, name, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleResetProgress = () => {
    if (window.confirm(language === 'so' ? 'Ma hubtaa inaad tirtirto horumarkaaga?' : 'Are you sure you want to reset your progress?')) {
      setUser({
        ...user,
        completedLessons: [],
        completedQuizzes: [],
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20">
      <button
        onClick={() => setActiveTab('home')}
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-semibold bg-[#161e31] border border-[#2b3752] px-3.5 py-2 rounded-xl transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{language === 'so' ? 'Ku laabo Bogga Weyn' : 'Back to Home'}</span>
      </button>

      <div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">
          {language === 'so' ? 'Bogga Xogta & Dejinta' : 'Profile & Settings'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          {language === 'so'
            ? 'Habeen xogtaada shakhsiga ah, luqadda, iyo dejinta barxadda.'
            : 'Manage your personal details, language preference, and account settings.'}
        </p>
      </div>

      <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 space-y-6 shadow-xl">
        <div className="flex items-center gap-4 pb-4 border-b border-[#1f293d]">
          <div className="w-16 h-16 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-xs text-slate-400">{email}</p>
            <span className="inline-block mt-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] px-2.5 py-0.5 rounded-full font-semibold">
              {user.role === 'admin' ? 'Administrator' : 'Arday (Student)'}
            </span>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1">
              {language === 'so' ? 'Magacaaga Buuxa' : 'Full Name'}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#0b0f19] border border-[#2b3752] rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">
              {language === 'so' ? 'Iimaylka (Email)' : 'Email Address'}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0b0f19] border border-[#2b3752] rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-all"
            >
              {saved && <Check className="w-4 h-4" />}
              <span>{language === 'so' ? 'Kaydi Isbedelka' : 'Save Changes'}</span>
            </button>

            <button
              type="button"
              onClick={handleResetProgress}
              className="flex items-center gap-1.5 text-red-400 hover:text-red-300 text-xs font-semibold bg-red-500/10 border border-red-500/20 px-4 py-2.5 rounded-xl transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'so' ? 'Dib u deji horumarka' : 'Reset Progress'}</span>
            </button>
          </div>
        </form>
      </div>

      {/* Language Switcher Card */}
      <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-500/15 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              {language === 'so' ? 'Luqadda Barxadda' : 'Platform Language'}
            </h4>
            <p className="text-xs text-slate-400">
              {language === 'so' ? 'Af Soomaali / English' : 'Somali / English'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setLanguage(language === 'so' ? 'en' : 'so')}
          className="bg-[#161e31] border border-[#2b3752] text-cyan-400 font-bold px-4 py-2 rounded-xl text-xs hover:bg-[#1f293d] transition-colors"
        >
          {language === 'so' ? 'Switch to English' : 'U bedel Soomaali'}
        </button>
      </div>

      {/* About Creator / Waa Kee Qofkii Sameeyay? */}
      <div className="bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-purple-900/30 border border-cyan-500/30 rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-lg shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">
              {language === 'so' ? 'Ku Saabsanka Abuuraha (About Creator)' : 'About the Creator'}
            </h4>
            <p className="text-xs text-cyan-400 font-semibold">Coler-Code Platform</p>
          </div>
        </div>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          {language === 'so'
            ? 'Barxaddan waxaa sameeyey Abdulaahi Abdinaasir Ali, oo ah wiil dhalinyaro ah oo wanaagsan oo dadka wax ku bara xirfadaha muhiimka ah sida Programming-ka (Coding), Graphic Design, Video Generation, iyo Video Editing.'
            : 'This platform was created by Abdulaahi Abdinaasir Ali, an amazing young developer and instructor who teaches people valuable skills like Programming/Coding, Graphic Design, Video Generation, and Video Editing.'}
        </p>

        <div className="pt-2 border-t border-cyan-500/20 flex flex-wrap gap-2">
          {['Coding', 'Graphic Design', 'Video Generation', 'Video Editing'].map((skill, idx) => (
            <span key={idx} className="bg-[#161e31] border border-[#2b3752] text-cyan-300 text-[10px] px-3 py-1 rounded-lg font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
