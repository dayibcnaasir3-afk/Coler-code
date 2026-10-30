import React, { useState } from 'react';
import { Course, Lesson, Language, UserProfile } from '../types';
import { ShieldAlert, BookOpen, Users, Award, Plus, Check } from 'lucide-react';

interface AdminViewProps {
  courses: Course[];
  lessons: Lesson[];
  user: UserProfile;
  language: Language;
}

export const AdminView: React.FC<AdminViewProps> = ({
  courses,
  lessons,
  user,
  language,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'courses' | 'lessons' | 'users'>('courses');
  const [successMsg, setSuccessMsg] = useState('');

  const triggerSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full text-purple-400 text-xs font-semibold mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{language === 'so' ? 'Qaybta Maamulka (Admin)' : 'Admin Management Panel'}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            {language === 'so' ? 'Maamulka Coler-Code' : 'Coler-Code Administration'}
          </h2>
        </div>

        {successMsg && (
          <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs px-4 py-2 rounded-xl flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4" />
            <span>{successMsg}</span>
          </div>
        )}
      </div>

      {/* Sub tabs */}
      <div className="flex items-center gap-2 border-b border-[#1f293d] pb-3">
        {[
          { id: 'courses', labelSo: 'Koorsooyinka', labelEn: 'Courses', icon: BookOpen },
          { id: 'lessons', labelSo: 'Casharrada', labelEn: 'Lessons', icon: Award },
          { id: 'users', labelSo: 'Ardayda', labelEn: 'Users', icon: Users },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-[#111827] hover:bg-[#161e31] border border-[#1f293d] text-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{language === 'so' ? tab.labelSo : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Content based on subtab */}
      {activeSubTab === 'courses' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">
              {language === 'so' ? 'Maamulka Koorsooyinka' : 'Manage Courses'}
            </h3>
            <button
              onClick={() => triggerSuccess(language === 'so' ? 'Koorsada cusub waa la diiwaan geliyay!' : 'New course created successfully!')}
              className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>{language === 'so' ? 'Ku Dar Koorso' : 'Add Course'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-[#111827] border border-[#1f293d] rounded-2xl p-5 space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{language === 'so' ? course.titleSo : course.titleEn}</h4>
                  <span className="text-[10px] bg-purple-500/15 text-purple-300 px-2.5 py-1 rounded-full font-semibold">
                    {course.lessonsCount} {language === 'so' ? 'Casharro' : 'Lessons'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2">{language === 'so' ? course.descSo : course.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'lessons' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">
              {language === 'so' ? 'Maamulka Casharrada' : 'Manage Lessons'}
            </h3>
            <button
              onClick={() => triggerSuccess(language === 'so' ? 'Casharka cusub waa la kaydiyay!' : 'New lesson saved successfully!')}
              className="flex items-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>{language === 'so' ? 'Ku Dar Cashar' : 'Add Lesson'}</span>
            </button>
          </div>

          <div className="space-y-3">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="bg-[#111827] border border-[#1f293d] rounded-xl p-4 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">{language === 'so' ? lesson.titleSo : lesson.titleEn}</h4>
                  <p className="text-xs text-slate-400">{lesson.durationMin} {language === 'so' ? 'daqiiqo' : 'mins'}</p>
                </div>
                <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-lg">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'users' && (
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white">
            {language === 'so' ? 'Ardayda Diiwaan Gishan' : 'Registered Students'}
          </h3>
          <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between p-3 bg-[#161e31] border border-[#2b3752] rounded-xl">
              <div>
                <h4 className="text-sm font-bold text-white">{user.name}</h4>
                <p className="text-xs text-slate-400">{user.email}</p>
              </div>
              <span className="bg-cyan-500/15 text-cyan-400 text-xs px-3 py-1 rounded-full font-semibold">
                Active Student
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
