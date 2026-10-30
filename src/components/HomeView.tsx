import React, { useState } from 'react';
import { Course, Language, UserProfile, Lesson } from '../types';
import { Sparkles, ArrowRight, BookOpen, Code2, Award, Bot, CheckCircle } from 'lucide-react';

interface HomeViewProps {
  courses: Course[];
  lessons: Lesson[];
  user: UserProfile;
  language: Language;
  setActiveTab: (tab: string) => void;
  setSelectedCourseId: (id: string) => void;
  setSelectedLessonId: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  courses,
  lessons,
  user,
  language,
  setActiveTab,
  setSelectedCourseId,
  setSelectedLessonId,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(c => 
    c.titleSo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.descSo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const nextLesson = lessons.find(l => !user.completedLessons.includes(l.id)) || lessons[0];

  return (
    <div className="space-y-6 pb-20">
      {/* Welcome Banner with Centered Logo */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-950/60 via-[#111827] to-purple-950/60 border border-cyan-500/30 p-8 text-center space-y-6 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Centered Logo */}
        <div className="relative z-10 flex justify-center">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/40 bg-[#0b0f19] group">
            <img 
              src="/assets/aistudio/file_0000000063e881f497cd43f797119f2f_93469857.png" 
              alt="Coler-Code Logo" 
              className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="relative z-10 space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1 rounded-full text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'so' ? 'Barxadda Koowaad ee Soomaaliyeed' : 'Somali Coding Platform'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {language === 'so' ? 'Baro Coding, Dhiso Mustaqbalkaaga.' : 'Learn Coding, Build Your Future.'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {language === 'so'
              ? 'Ku baro HTML, CSS, JavaScript, iyo Python af Soomaali fudud oo leh tusaalayaal iyo tijaabin toos ah.'
              : 'Learn HTML, CSS, JavaScript, and Python in Somali with interactive coding lessons and live code execution.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSelectedCourseId(nextLesson.courseId);
                setSelectedLessonId(nextLesson.id);
                setActiveTab('lesson');
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all transform active:scale-95"
            >
              <span>{language === 'so' ? 'Bilaab Casharka Xiga' : 'Start Next Lesson'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('aitutor')}
              className="flex items-center gap-2 bg-[#161e31] hover:bg-[#1f293d] border border-[#2b3752] text-cyan-400 font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm transition-colors"
            >
              <Bot className="w-4 h-4" />
              <span>{language === 'so' ? 'Weydii AI Tutor' : 'Ask AI Tutor'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={language === 'so' ? 'Raadi casharro, koorsooyin...' : 'Search courses, lessons...'}
          className="w-full bg-[#161e31] border border-[#2b3752] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
        />
      </div>

      {/* Continue Learning Card */}
      {nextLesson && (
        <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-5 shadow-md flex items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
              {language === 'so' ? 'Sii wad waxbarashada' : 'Continue Learning'}
            </div>
            <h3 className="text-white font-bold text-base">
              {language === 'so' ? nextLesson.titleSo : nextLesson.titleEn}
            </h3>
            <p className="text-slate-400 text-xs">
              {nextLesson.durationMin} {language === 'so' ? 'daqiiqo' : 'mins'} • {language === 'so' ? 'Casharka xiga' : 'Next lesson'}
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedCourseId(nextLesson.courseId);
              setSelectedLessonId(nextLesson.id);
              setActiveTab('lesson');
            }}
            className="bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-400 p-3 rounded-xl transition-colors shrink-0"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Daily Coding Tip */}
      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-4 flex items-start gap-3">
        <div className="p-2 bg-purple-500/20 rounded-xl text-purple-400 shrink-0 mt-0.5">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-purple-300">
            {language === 'so' ? 'Talo Maalmeedka Coding-ka' : 'Daily Coding Tip'}
          </h4>
          <p className="text-slate-300 text-xs mt-1 leading-relaxed">
            {language === 'so'
              ? 'Waqti kasta oo aad qorayso code, hubi inaad si cad u magacowdo doorsoomayaashaada (variables) si ay akhristayaasha kale u fahmaan.'
              : 'Always use descriptive variable names in your code so that teammates and your future self can easily understand your logic.'}
          </p>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white tracking-tight">
            {language === 'so' ? 'Koorsooyinka La Heli Karo' : 'Featured Courses'}
          </h3>
          <button
            onClick={() => setActiveTab('courses')}
            className="text-xs text-cyan-400 hover:underline font-semibold"
          >
            {language === 'so' ? 'Dhammaan eeg →' : 'View all →'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course) => {
            const completedCount = lessons.filter(
              l => l.courseId === course.id && user.completedLessons.includes(l.id)
            ).length;
            const progressPercent = Math.round((completedCount / course.lessonsCount) * 100);

            return (
              <div
                key={course.id}
                onClick={() => {
                  setSelectedCourseId(course.id);
                  setActiveTab('courses');
                }}
                className="bg-[#111827] hover:bg-[#161e31] border border-[#1f293d] hover:border-cyan-500/40 rounded-2xl p-5 cursor-pointer transition-all shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${course.color} flex items-center justify-center text-white shadow-lg`}>
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold bg-[#1f293d] text-cyan-300 px-2.5 py-1 rounded-full">
                      {language === 'so' ? course.levelSo : course.levelEn}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {language === 'so' ? course.titleSo : course.titleEn}
                    </h4>
                    <p className="text-slate-400 text-xs mt-1 line-clamp-2 leading-relaxed">
                      {language === 'so' ? course.descSo : course.descEn}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#1f293d] space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{course.lessonsCount} {language === 'so' ? 'Casharro' : 'Lessons'}</span>
                    <span className="text-cyan-400 font-semibold">{progressPercent}%</span>
                  </div>
                  <div className="w-full bg-[#1f293d] h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all"
                      style={{ width: `${progressPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
