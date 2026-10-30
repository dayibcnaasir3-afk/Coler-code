import React, { useState } from 'react';
import { Course, Lesson, Language, UserProfile } from '../types';
import { BookOpen, CheckCircle, Clock, ChevronRight, ArrowLeft, Play } from 'lucide-react';

interface CoursesViewProps {
  courses: Course[];
  lessons: Lesson[];
  user: UserProfile;
  language: Language;
  selectedCourseId: string | null;
  setSelectedCourseId: (id: string | null) => void;
  setSelectedLessonId: (id: string) => void;
  setActiveTab: (tab: string) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  courses,
  lessons,
  user,
  language,
  selectedCourseId,
  setSelectedCourseId,
  setSelectedLessonId,
  setActiveTab,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  const activeCourse = courses.find(c => c.id === selectedCourseId);
  const courseLessons = activeCourse ? lessons.filter(l => l.courseId === activeCourse.id) : [];

  if (activeCourse) {
    return (
      <div className="space-y-6 pb-20">
        <button
          onClick={() => setSelectedCourseId(null)}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-semibold bg-[#161e31] border border-[#2b3752] px-3.5 py-2 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'so' ? 'Ku laabo Koorsooyinka' : 'Back to Courses'}</span>
        </button>

        {/* Course Header Banner */}
        <div className={`rounded-2xl bg-gradient-to-tr ${activeCourse.color} p-6 text-white shadow-xl space-y-3`}>
          <div className="flex items-center justify-between">
            <span className="text-xs bg-black/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold">
              {language === 'so' ? activeCourse.levelSo : activeCourse.levelEn}
            </span>
            <span className="text-xs font-semibold opacity-90">
              {courseLessons.length} {language === 'so' ? 'Casharro' : 'Lessons'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'so' ? activeCourse.titleSo : activeCourse.titleEn}
          </h2>
          <p className="text-sm opacity-90 max-w-xl leading-relaxed">
            {language === 'so' ? activeCourse.descSo : activeCourse.descEn}
          </p>
        </div>

        {/* Lessons List */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-white tracking-tight">
            {language === 'so' ? 'Casharrada Koorsoinkan' : 'Course Lessons'}
          </h3>

          <div className="space-y-3">
            {courseLessons.map((lesson, index) => {
              const isCompleted = user.completedLessons.includes(lesson.id);
              return (
                <div
                  key={lesson.id}
                  onClick={() => {
                    setSelectedLessonId(lesson.id);
                    setActiveTab('lesson');
                  }}
                  className="bg-[#111827] hover:bg-[#161e31] border border-[#1f293d] hover:border-cyan-500/40 rounded-xl p-4 cursor-pointer transition-all flex items-center justify-between gap-4 group shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                      isCompleted 
                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400' 
                        : 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                    }`}>
                      {isCompleted ? <CheckCircle className="w-5 h-5" /> : index + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {language === 'so' ? lesson.titleSo : lesson.titleEn}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {language === 'so' ? lesson.definitionSo : lesson.definitionEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{lesson.durationMin} {language === 'so' ? 'daq' : 'min'}</span>
                    </div>
                    <div className="p-2 bg-[#1f293d] group-hover:bg-cyan-500/20 rounded-xl text-slate-300 group-hover:text-cyan-400 transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20">
      <div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">
          {language === 'so' ? 'Koorsooyinka Coler-Code' : 'Coler-Code Courses'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          {language === 'so'
            ? 'Dooro koorsada aad rabto inaad barato oo billow safarkaaga coding-ka.'
            : 'Select a course to start mastering programming skills.'}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'all', labelSo: 'Dhammaan', labelEn: 'All' },
          { id: 'html', labelSo: 'HTML', labelEn: 'HTML' },
          { id: 'css', labelSo: 'CSS', labelEn: 'CSS' },
          { id: 'js', labelSo: 'JavaScript', labelEn: 'JavaScript' },
          { id: 'python', labelSo: 'Python', labelEn: 'Python' },
          { id: 'git', labelSo: 'Git & GitHub', labelEn: 'Git' },
          { id: 'web', labelSo: 'Web Dev', labelEn: 'Web Dev' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-[#161e31] hover:bg-[#1f293d] border border-[#2b3752] text-slate-300'
            }`}
          >
            {language === 'so' ? cat.labelSo : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => {
          const completedCount = lessons.filter(
            l => l.courseId === course.id && user.completedLessons.includes(l.id)
          ).length;
          const progressPercent = Math.round((completedCount / course.lessonsCount) * 100);

          return (
            <div
              key={course.id}
              onClick={() => setSelectedCourseId(course.id)}
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
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {language === 'so' ? course.titleSo : course.titleEn}
                  </h3>
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
  );
};
