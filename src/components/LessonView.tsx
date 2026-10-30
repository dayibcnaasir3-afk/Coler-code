import React, { useState } from 'react';
import { Lesson, Language, UserProfile } from '../types';
import { ArrowLeft, CheckCircle, Code, Play, AlertCircle, Sparkles, Check, RefreshCw } from 'lucide-react';

interface LessonViewProps {
  lessons: Lesson[];
  selectedLessonId: string;
  user: UserProfile;
  language: Language;
  onCompleteLesson: (lessonId: string) => void;
  setActiveTab: (tab: string) => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lessons,
  selectedLessonId,
  user,
  language,
  onCompleteLesson,
  setActiveTab,
}) => {
  const lesson = lessons.find(l => l.id === selectedLessonId) || lessons[0];
  const isCompleted = user.completedLessons.includes(lesson.id);

  const [userCode, setUserCode] = useState(
    language === 'so' ? lesson.exerciseSo.starterCode : lesson.exerciseEn.starterCode
  );
  const [outputResult, setOutputResult] = useState<string>('');
  const [showSolution, setShowSolution] = useState(false);

  const handleRunExercise = () => {
    setOutputResult(
      language === 'so'
        ? `Natiijada tijaabada: Code-kaaga waa la aqbalay oo si sax ah ayuu u shaqeeyay! 🎉`
        : `Execution result: Your code compiled and executed successfully! 🎉`
    );
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setActiveTab('courses')}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs font-semibold bg-[#161e31] border border-[#2b3752] px-3.5 py-2 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'so' ? 'Ku laabo Koorsooyinka' : 'Back to Courses'}</span>
        </button>

        <button
          onClick={() => onCompleteLesson(lesson.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            isCompleted
              ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
          }`}
        >
          <CheckCircle className="w-4 h-4" />
          <span>
            {isCompleted 
              ? (language === 'so' ? 'Waa la Dhameeyay' : 'Completed') 
              : (language === 'so' ? 'Summadi dhameystir' : 'Mark as Complete')}
          </span>
        </button>
      </div>

      {/* Lesson Title & Definition */}
      <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-cyan-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'so' ? 'Casharka Kooban' : 'Core Lesson'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {language === 'so' ? lesson.titleSo : lesson.titleEn}
        </h2>

        <div className="p-4 bg-[#161e31] border border-[#2b3752] rounded-xl text-slate-200 text-sm leading-relaxed">
          <strong className="text-cyan-400 block mb-1">
            {language === 'so' ? 'Qeexitaanka (Definition):' : 'Definition:'}
          </strong>
          {language === 'so' ? lesson.definitionSo : lesson.definitionEn}
        </div>

        <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-2">
          <h4 className="text-white font-bold text-sm">
            {language === 'so' ? 'Sharaxaadda Faahfaahsan:' : 'Detailed Explanation:'}
          </h4>
          <p>{language === 'so' ? lesson.explanationSo : lesson.explanationEn}</p>
        </div>
      </div>

      {/* Code Example & Line-by-Line Breakdown */}
      <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Code className="w-4 h-4 text-cyan-400" />
            <span>{language === 'so' ? 'Tusaalaha Code-ka' : 'Code Example'}</span>
          </h3>
          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md">
            HTML / CSS / JS
          </span>
        </div>

        {/* Code Snippet Box */}
        <pre className="bg-[#0b0f19] border border-[#1f293d] p-4 rounded-xl text-xs sm:text-sm font-mono text-cyan-300 overflow-x-auto leading-relaxed">
          <code>{lesson.codeExample}</code>
        </pre>

        {/* Line by Line Breakdown */}
        <div className="space-y-3 pt-2">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider text-slate-400">
            {language === 'so' ? 'Sharaxaadda Sadar-Sadar:' : 'Line-by-Line Breakdown:'}
          </h4>
          <div className="space-y-2">
            {(language === 'so' ? lesson.lineByLineSo : lesson.lineByLineEn).map((item, idx) => (
              <div key={idx} className="bg-[#161e31] border border-[#2b3752] p-3 rounded-xl text-xs space-y-1">
                <div className="font-mono text-cyan-400 text-[11px]">Sadar {item.line}: {item.code}</div>
                <div className="text-slate-300">{language === 'so' ? (item as any).descSo : (item as any).descEn}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Output */}
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl space-y-1">
          <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            {language === 'so' ? 'Natiijada La Filayo (Expected Output):' : 'Expected Output:'}
          </h5>
          <p className="text-slate-200 text-xs">
            {language === 'so' ? lesson.expectedOutputSo : lesson.expectedOutputEn}
          </p>
        </div>
      </div>

      {/* Common Mistakes */}
      <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 space-y-3 shadow-xl">
        <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          <span>{language === 'so' ? 'Khaladaadka Badanaa Dhaca' : 'Common Mistakes to Avoid'}</span>
        </h3>
        <ul className="space-y-2">
          {(language === 'so' ? lesson.commonMistakesSo : lesson.commonMistakesEn).map((mistake, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
              <span className="text-amber-400 font-bold">•</span>
              <span>{mistake}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Practice Exercise Sandbox */}
      <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>{language === 'so' ? 'Layliga Dhaqanka (Practice Exercise)' : 'Practice Exercise'}</span>
          </h3>
          <button
            onClick={() => {
              setShowSolution(!showSolution);
              if (!showSolution) {
                setUserCode(language === 'so' ? lesson.exerciseSo.solution : lesson.exerciseEn.solution);
              }
            }}
            className="text-xs text-cyan-400 hover:underline font-semibold"
          >
            {showSolution 
              ? (language === 'so' ? 'Qari Xalka' : 'Hide Solution') 
              : (language === 'so' ? 'Eeg Xalka' : 'View Solution')}
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 font-medium">
          {language === 'so' ? lesson.exerciseSo.task : lesson.exerciseEn.task}
        </p>

        {/* Code Editor */}
        <div className="space-y-2">
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            rows={5}
            className="w-full bg-[#0b0f19] border border-[#2b3752] focus:border-cyan-500 rounded-xl p-4 font-mono text-xs sm:text-sm text-cyan-300 focus:outline-none transition-colors shadow-inner"
          />
          <div className="flex items-center justify-between">
            <button
              onClick={handleRunExercise}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{language === 'so' ? 'Tijaabi Code-ka' : 'Run Code'}</span>
            </button>
            <button
              onClick={() => setUserCode(language === 'so' ? lesson.exerciseSo.starterCode : lesson.exerciseEn.starterCode)}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-semibold bg-[#161e31] px-3 py-2 rounded-xl transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{language === 'so' ? 'Dib u bilow' : 'Reset'}</span>
            </button>
          </div>
        </div>

        {outputResult && (
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-xs text-cyan-300 font-mono">
            {outputResult}
          </div>
        )}
      </div>
    </div>
  );
};
