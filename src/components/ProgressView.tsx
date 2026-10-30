import React from 'react';
import { UserProfile, Language, Course, Lesson } from '../types';
import { Award, CheckCircle, Trophy } from 'lucide-react';

interface ProgressViewProps {
  user: UserProfile;
  courses: Course[];
  lessons: Lesson[];
  language: Language;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  user,
  courses,
  lessons,
  language,
}) => {
  const totalLessons = lessons.length;
  const completedCount = user.completedLessons.length;
  const overallPercent = Math.round((completedCount / (totalLessons || 1)) * 100);

  return (
    <div className="space-y-6 pb-20">
      <div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">
          {language === 'so' ? 'Horumarkaaga & Shahaadooyinka' : 'Your Learning Progress'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          {language === 'so'
            ? 'La soco guulahaaga, casharrada la dhameeyay, iyo billadahaaga.'
            : 'Track your completed lessons, overall progress, and earned badges.'}
        </p>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Completed Lessons */}
        <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-5 flex items-center gap-4 shadow-md">
          <div className="w-12 h-12 bg-cyan-500/15 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{completedCount} / {totalLessons}</div>
            <div className="text-xs text-slate-400 font-medium">
              {language === 'so' ? 'Casharro la Dhameeyay' : 'Completed Lessons'}
            </div>
          </div>
        </div>

        {/* Overall Completion */}
        <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-5 flex items-center gap-4 shadow-md">
          <div className="w-12 h-12 bg-purple-500/15 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{overallPercent}%</div>
            <div className="text-xs text-slate-400 font-medium">
              {language === 'so' ? 'Heerka Guud' : 'Overall Progress'}
            </div>
          </div>
        </div>
      </div>

      {/* Earned Badges */}
      <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 space-y-4 shadow-xl">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          <span>{language === 'so' ? 'Billadaha & Abaalmarinta' : 'Badges & Achievements'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {user.earnedBadges.map((badge) => (
            <div key={badge.id} className="bg-[#161e31] border border-[#2b3752] rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-lg">
                🏆
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {language === 'so' ? badge.titleSo : badge.titleEn}
                </h4>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  {language === 'so' ? 'La helay:' : 'Earned:'} {badge.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
