import React from 'react';
import { UserProfile, Course, Language } from '../types';
import { Award, Download, CheckCircle, Sparkles } from 'lucide-react';

interface CertificatesViewProps {
  user: UserProfile;
  courses: Course[];
  language: Language;
}

export const CertificatesView: React.FC<CertificatesViewProps> = ({
  user,
  courses,
  language,
}) => {
  return (
    <div className="space-y-6 pb-20">
      <div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">
          {language === 'so' ? 'Shahaadooyinkaaga' : 'Your Certificates'}
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">
          {language === 'so'
            ? 'Shahaadooyinka rasmiga ah ee ay siisay barxadda Coler-Code markaad dhameysato koorsooyinka.'
            : 'Official certificates earned upon completing courses on Coler-Code.'}
        </p>
      </div>

      <div className="space-y-6">
        {courses.map((course) => {
          const isCompleted = user.completedQuizzes.includes(course.id) || true; // Demo sample or completion condition

          return (
            <div
              key={course.id}
              className="bg-gradient-to-r from-[#111827] via-[#161e31] to-[#111827] border-2 border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white">
                      {language === 'so' ? course.titleSo : course.titleEn}
                    </h3>
                    <p className="text-xs text-cyan-400">Coler-Code Certified Graduate</p>
                  </div>
                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full text-cyan-300 text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{language === 'so' ? 'Waa La Bixiyay' : 'Verified'}</span>
                </div>
              </div>

              {/* Certificate Body Preview */}
              <div className="bg-[#0b0f19] border border-[#1f293d] rounded-xl p-6 text-center space-y-3 relative z-10">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                  {language === 'so' ? 'Shahaadadan waxaa la guddoonsiiyay:' : 'This certificate is proudly presented to'}
                </p>
                <h4 className="text-2xl font-extrabold text-white tracking-wide">
                  {user.name}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  {language === 'so'
                    ? `Guul weyn ayuu ka gaaray dhamaystirka koorsada ${course.titleSo} ee barxadda Coler-Code.`
                    : `For successfully completing the ${course.titleEn} course on Coler-Code platform.`}
                </p>

                <div className="pt-4 border-t border-[#1f293d] flex items-center justify-between text-[11px] text-slate-400">
                  <span>{language === 'so' ? 'Taariikhda: 2026' : 'Date: 2026'}</span>
                  <span className="font-mono text-cyan-400">Verification ID: CC-SO-8921</span>
                </div>
              </div>

              <div className="flex justify-end relative z-10">
                <button
                  onClick={() => alert(language === 'so' ? 'Shahaadada waa la soo dejiyay!' : 'Certificate downloaded successfully!')}
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-lg transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{language === 'so' ? 'Soo Degso Shahaadada (PDF)' : 'Download Certificate'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
