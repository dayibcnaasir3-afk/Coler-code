export type Language = 'so' | 'en';

export interface Course {
  id: string;
  titleSo: string;
  titleEn: string;
  descSo: string;
  descEn: string;
  category: 'html' | 'css' | 'js' | 'python' | 'git' | 'web';
  levelSo: string;
  levelEn: string;
  lessonsCount: number;
  icon: string;
  color: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  titleSo: string;
  titleEn: string;
  definitionSo: string;
  definitionEn: string;
  explanationSo: string;
  explanationEn: string;
  codeExample: string;
  lineByLineSo: { line: number; code: string; descSo: string }[];
  lineByLineEn: { line: number; code: string; descEn: string }[];
  expectedOutputSo: string;
  expectedOutputEn: string;
  commonMistakesSo: string[];
  commonMistakesEn: string[];
  exerciseSo: { task: string; starterCode: string; solution: string };
  exerciseEn: { task: string; starterCode: string; solution: string };
  durationMin: number;
}

export interface QuizQuestion {
  id: string;
  courseId: string;
  questionSo: string;
  questionEn: string;
  optionsSo: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationSo: string;
  explanationEn: string;
}

export interface Project {
  id: string;
  titleSo: string;
  titleEn: string;
  descSo: string;
  descEn: string;
  difficultySo: string;
  difficultyEn: string;
  skillsSo: string[];
  skillsEn: string[];
  stepsSo: { stepNumber: number; title: string; detail: string; codeSnippet?: string }[];
  stepsEn: { stepNumber: number; title: string; detail: string; codeSnippet?: string }[];
  starterHtml: string;
  starterCss: string;
  starterJs: string;
}

export interface CommunityPost {
  id: string;
  authorName: string;
  authorAvatar: string;
  category: string;
  title: string;
  content: string;
  createdAt: string;
  upvotes: number;
  repliesCount: number;
  replies: { id: string; authorName: string; content: string; createdAt: string }[];
}

export interface UserProfile {
  name: string;
  email: string;
  role: 'student' | 'admin';
  streak: number;
  completedLessons: string[]; // lesson ids
  completedQuizzes: string[]; // course ids
  earnedBadges: { id: string; titleSo: string; titleEn: string; icon: string; date: string }[];
  offlineLessons: string[]; // lesson ids
  language: Language;
}
