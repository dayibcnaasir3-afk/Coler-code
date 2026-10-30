import React, { useState } from 'react';
import { QuizQuestion, Language, UserProfile } from '../types';
import { Award, CheckCircle, XCircle, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';

interface QuizzesViewProps {
  quizzes: QuizQuestion[];
  user: UserProfile;
  language: Language;
  onCompleteQuiz: (courseId: string, score: number) => void;
}

export const QuizzesView: React.FC<QuizzesViewProps> = ({
  quizzes,
  user,
  language,
  onCompleteQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuiz = quizzes[currentIndex] || quizzes[0];
  const options = language === 'so' ? currentQuiz.optionsSo : currentQuiz.optionsEn;

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQuiz.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < quizzes.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      onCompleteQuiz(currentQuiz.courseId, score + (selectedOption === currentQuiz.correctIndex ? 1 : 0));
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="max-w-xl mx-auto space-y-6 text-center py-12">
        <div className="w-20 h-20 bg-gradient-to-tr from-amber-500 to-orange-600 rounded-3xl mx-auto flex items-center justify-center text-white shadow-xl shadow-amber-500/20">
          <Award className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {language === 'so' ? 'Hambalyo! Imtixaankii Waa Dhammaaday' : 'Quiz Completed!'}
          </h2>
          <p className="text-slate-300 text-sm">
            {language === 'so'
              ? `Waxaad ka keentay ${score} dhibcood ${quizzes.length} su'aalood oo ka mid ahaa.`
              : `You scored ${score} out of ${quizzes.length} questions.`}
          </p>
        </div>

        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{language === 'so' ? 'Dib u imtixaan' : 'Retake Quiz'}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full text-cyan-400 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'so' ? `Su'aasha ${currentIndex + 1} ee ${quizzes.length}` : `Question ${currentIndex + 1} of ${quizzes.length}`}</span>
        </div>
        <span className="text-xs font-semibold text-slate-400">
          {language === 'so' ? 'Dhibcaha:' : 'Score:'} {score}
        </span>
      </div>

      {/* Quiz Card */}
      <div className="bg-[#111827] border border-[#1f293d] rounded-2xl p-6 space-y-6 shadow-xl">
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-relaxed">
          {language === 'so' ? currentQuiz.questionSo : currentQuiz.questionEn}
        </h3>

        <div className="space-y-3">
          {options.map((option, idx) => {
            let btnStyle = 'bg-[#161e31] border-[#2b3752] text-slate-200 hover:bg-[#1f293d]';
            if (isAnswered) {
              if (idx === currentQuiz.correctIndex) {
                btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
              } else if (idx === selectedOption) {
                btnStyle = 'bg-red-500/20 border-red-500 text-red-300';
              } else {
                btnStyle = 'bg-[#161e31] border-[#2b3752] opacity-50';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
              >
                <span>{option}</span>
                {isAnswered && idx === currentQuiz.correctIndex && (
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                {isAnswered && idx === selectedOption && idx !== currentQuiz.correctIndex && (
                  <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="p-4 bg-[#161e31] border border-[#2b3752] rounded-xl space-y-2 animate-fadeIn">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
              {language === 'so' ? 'Sharaxaadda (Explanation):' : 'Explanation:'}
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {language === 'so' ? currentQuiz.explanationSo : currentQuiz.explanationEn}
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-all"
              >
                <span>{language === 'so' ? 'Su\'aasha Xiga' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
