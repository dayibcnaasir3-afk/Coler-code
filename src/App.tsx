import React, { useState, useEffect } from 'react';
import { UserProfile, Language, CommunityPost } from './types';
import { COURSES, LESSONS, QUIZZES, PROJECTS, COMMUNITY_POSTS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './components/HomeView';
import { CoursesView } from './components/CoursesView';
import { LessonView } from './components/LessonView';
import { PlaygroundView } from './components/PlaygroundView';
import { QuizzesView } from './components/QuizzesView';
import { ProjectsView } from './components/ProjectsView';
import { AiTutorView } from './components/AiTutorView';
import { ProgressView } from './components/ProgressView';
import { CertificatesView } from './components/CertificatesView';
import { CommunityView } from './components/CommunityView';
import { SupportView } from './components/SupportView';
import { ProfileView } from './components/ProfileView';
import { AdminView } from './components/AdminView';

export default function App() {
  const [language, setLanguage] = useState<Language>('so');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [selectedLessonId, setSelectedLessonId] = useState<string>('html-1');

  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('coler_code_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return {
      name: 'Ardayga Soomaaliyeed',
      email: 'dayibcnaasir3@gmail.com',
      role: 'student',
      streak: 5,
      completedLessons: ['html-1'],
      completedQuizzes: ['html'],
      earnedBadges: [
        { id: 'b1', titleSo: 'Bilowgii Koowaad', titleEn: 'First Steps', icon: '🏆', date: '2026-10-30' }
      ],
      offlineLessons: ['html-1', 'css-1'],
      language: 'so'
    };
  });

  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS);

  useEffect(() => {
    localStorage.setItem('coler_code_user', JSON.stringify(user));
  }, [user]);

  const handleCompleteLesson = (lessonId: string) => {
    if (!user.completedLessons.includes(lessonId)) {
      const updated = [...user.completedLessons, lessonId];
      setUser({
        ...user,
        completedLessons: updated,
        streak: user.streak + 1,
        earnedBadges: updated.length === 3 
          ? [...user.earnedBadges, { id: 'b2', titleSo: 'Khabiir HTML', titleEn: 'HTML Expert', icon: '⭐', date: new Date().toISOString().split('T')[0] }]
          : user.earnedBadges
      });
    }
  };

  const handleCompleteQuiz = (courseId: string, score: number) => {
    if (!user.completedQuizzes.includes(courseId)) {
      setUser({
        ...user,
        completedQuizzes: [...user.completedQuizzes, courseId]
      });
    }
  };

  const handleAddPost = (title: string, content: string, category: string) => {
    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      authorName: user.name,
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      category,
      title,
      content,
      createdAt: language === 'so' ? 'Hadda' : 'Just now',
      upvotes: 1,
      repliesCount: 0,
      replies: []
    };
    setPosts([newPost, ...posts]);
  };

  const handleUpvote = (postId: string) => {
    setPosts(posts.map(p => p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p));
  };

  const handleAddReply = (postId: string, replyText: string) => {
    setPosts(posts.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          replies: [
            ...p.replies,
            {
              id: `rep-${Date.now()}`,
              authorName: user.name,
              content: replyText,
              createdAt: language === 'so' ? 'Hadda' : 'Just now'
            }
          ]
        };
      }
      return p;
    }));
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-white">
      <Navbar
        user={user}
        setLanguage={setLanguage}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'home' && (
          <HomeView
            courses={COURSES}
            lessons={LESSONS}
            user={user}
            language={language}
            setActiveTab={setActiveTab}
            setSelectedCourseId={setSelectedCourseId}
            setSelectedLessonId={setSelectedLessonId}
          />
        )}
        {activeTab === 'courses' && (
          <CoursesView
            courses={COURSES}
            lessons={LESSONS}
            user={user}
            language={language}
            selectedCourseId={selectedCourseId}
            setSelectedCourseId={setSelectedCourseId}
            setSelectedLessonId={setSelectedLessonId}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'lesson' && (
          <LessonView
            lessons={LESSONS}
            selectedLessonId={selectedLessonId}
            user={user}
            language={language}
            onCompleteLesson={handleCompleteLesson}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'playground' && (
          <PlaygroundView language={language} />
        )}
        {activeTab === 'quizzes' && (
          <QuizzesView
            quizzes={QUIZZES}
            user={user}
            language={language}
            onCompleteQuiz={handleCompleteQuiz}
          />
        )}
        {activeTab === 'projects' && (
          <ProjectsView
            projects={PROJECTS}
            language={language}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'aitutor' && (
          <AiTutorView language={language} />
        )}
        {activeTab === 'progress' && (
          <ProgressView
            user={user}
            courses={COURSES}
            lessons={LESSONS}
            language={language}
          />
        )}
        {activeTab === 'certificates' && (
          <CertificatesView
            user={user}
            courses={COURSES}
            language={language}
          />
        )}
        {activeTab === 'community' && (
          <CommunityView
            posts={posts}
            user={user}
            language={language}
            onAddPost={handleAddPost}
            onUpvote={handleUpvote}
            onAddReply={handleAddReply}
          />
        )}
        {activeTab === 'support' && (
          <SupportView language={language} />
        )}
        {activeTab === 'profile' && (
          <ProfileView
            user={user}
            setUser={setUser}
            language={language}
            setLanguage={setLanguage}
            setActiveTab={setActiveTab}
          />
        )}
        {activeTab === 'admin' && (
          <AdminView
            courses={COURSES}
            lessons={LESSONS}
            user={user}
            language={language}
          />
        )}
      </main>

      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
      />
    </div>
  );
}
