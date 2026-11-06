/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  BarChart3,
  BookOpen,
  FileText,
  GraduationCap,
  Moon,
  Sun,
  Timer,
} from 'lucide-react';
import { ALL_CHAPTERS, ALL_QUESTIONS, CHAPTER_BY_ID, QUESTION_BY_ID } from './data/index';
import { ExamAttempt, Question, UserAnswerRecord } from './types/mcq';
import {
  calculateChapterAnalytics,
  calculateOverallAnalytics,
  recordQuestionAttempt,
} from './utils/mcqEngine';
import { DashboardView } from './components/DashboardView';
import { ChaptersView } from './components/ChaptersView';
import { ChapterPracticeView } from './components/ChapterPracticeView';
import { MistakesView } from './components/MistakesView';
import { ExamSimulatorView } from './components/ExamSimulatorView';

const STORAGE_ANSWERS_KEY = 'ul_mcq_answers_v1';
const STORAGE_EXAMS_KEY = 'ul_mcq_exams_v1';
const STORAGE_THEME_KEY = 'ul_mcq_theme_v1';

type NavTab = 'dashboard' | 'chapters' | 'mistakes' | 'exam';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_THEME_KEY);
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_THEME_KEY, isDark ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  }, [isDark]);

  const [answersMap, setAnswersMap] = useState<Record<string, UserAnswerRecord>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_ANSWERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const [examAttempts, setExamAttempts] = useState<ExamAttempt[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_EXAMS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_ANSWERS_KEY, JSON.stringify(answersMap));
    } catch {
      // ignore storage errors
    }
  }, [answersMap]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_EXAMS_KEY, JSON.stringify(examAttempts));
    } catch {
      // ignore storage errors
    }
  }, [examAttempts]);

  const chapterAnalytics = useMemo(
    () => calculateChapterAnalytics(ALL_CHAPTERS, answersMap),
    [answersMap]
  );

  const overallAnalytics = useMemo(
    () => calculateOverallAnalytics(ALL_CHAPTERS, answersMap, examAttempts),
    [answersMap, examAttempts]
  );

  const handleSelectAnswer = (
    question: Question,
    optionId: string,
    fromMistakesReview: boolean = false
  ) => {
    setAnswersMap((prev) => {
      const updated = recordQuestionAttempt(
        prev[question.id],
        question,
        optionId,
        Date.now(),
        fromMistakesReview
      );
      return {
        ...prev,
        [question.id]: updated,
      };
    });
  };

  const handleResetChapter = (chapterId: string) => {
    const ch = CHAPTER_BY_ID[chapterId];
    if (!ch) return;
    setAnswersMap((prev) => {
      const next = { ...prev };
      for (const q of ch.questions) {
        delete next[q.id];
      }
      return next;
    });
  };

  const handleResetAllProgress = () => {
    setAnswersMap({});
    setExamAttempts([]);
    try {
      localStorage.removeItem(STORAGE_ANSWERS_KEY);
      localStorage.removeItem(STORAGE_EXAMS_KEY);
    } catch {
      // ignore
    }
  };

  const handleCompleteExam = (attempt: ExamAttempt, _questions: Question[]) => {
    setExamAttempts((prev) => [attempt, ...prev]);

    setAnswersMap((prev) => {
      const next = { ...prev };
      for (const res of attempt.results) {
        if (res.selectedOptionId !== null) {
          const q = QUESTION_BY_ID[res.questionId];
          if (q) {
            next[q.id] = recordQuestionAttempt(
              next[q.id],
              q,
              res.selectedOptionId,
              attempt.completedAt,
              false
            );
          }
        }
      }
      return next;
    });
  };

  const handleOpenChapter = (chapterId: string) => {
    setActiveChapterId(chapterId);
    setActiveTab('chapters');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchTab = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab !== 'chapters') {
      setActiveChapterId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeChapter = activeChapterId ? CHAPTER_BY_ID[activeChapterId] : null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col">
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <button
            onClick={() => handleSwitchTab('dashboard')}
            className="flex items-center gap-3 text-left group cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-600 dark:bg-teal-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-slate-50 leading-none">
                Upper Limb Anatomy
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1 tabular-nums">
                Module 101 • 33 Chapters • {overallAnalytics.totalQuestionsInBank} MCQs
              </div>
            </div>
          </button>

          {/* Primary Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shrink-0">
            <button
              onClick={() => handleSwitchTab('dashboard')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'dashboard'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 shrink-0" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => {
                setActiveChapterId(null);
                handleSwitchTab('chapters');
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'chapters'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>Chapters (33)</span>
            </button>

            <button
              onClick={() => handleSwitchTab('mistakes')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'mistakes'
                  ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Mistakes ({overallAnalytics.totalWrongActive})</span>
            </button>

            <button
              onClick={() => handleSwitchTab('exam')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'exam'
                  ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Timer className="w-3.5 h-3.5 shrink-0" />
              <span>Exam Simulator</span>
            </button>
          </nav>

          {/* Right Global Progression & Theme Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:flex flex-col items-end mr-1">
              <div className="flex items-center gap-2 text-[11px] font-mono tabular-nums">
                <span className="text-slate-500 dark:text-slate-400">Bank Progress:</span>
                <span className="font-bold text-teal-700 dark:text-teal-400">
                  {overallAnalytics.totalAnswered}/{overallAnalytics.totalQuestionsInBank} (
                  {overallAnalytics.overallProgressPercentage}%)
                </span>
              </div>
              <div className="w-32 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden mt-1">
                <div
                  className="h-full bg-teal-600 dark:bg-teal-500 transition-all duration-500"
                  style={{ width: `${overallAnalytics.overallProgressPercentage}%` }}
                />
              </div>
            </div>

            <a
              href="/assets/aistudio/2027_upper_limb_mcq_c6d30ceb.pdf"
              target="_blank"
              rel="noreferrer"
              title="Open Source Upper Limb MCQ PDF"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>PDF Booklet</span>
            </a>

            <button
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="relative inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 hover:bg-slate-200/70 dark:bg-slate-800 dark:hover:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-all cursor-pointer"
            >
              {isDark ? (
                <span className="inline-flex items-center gap-1.5 text-amber-400">
                  <Sun className="w-4 h-4" />
                  <span className="hidden sm:inline text-slate-200">Light Mode</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <Moon className="w-4 h-4 text-teal-700" />
                  <span className="hidden sm:inline">Dark Mode</span>
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Bottom-of-Header Navigation Strip */}
        <div className="md:hidden border-t border-slate-200/80 dark:border-slate-800/80 px-3 py-2 flex items-center justify-around gap-1 bg-slate-50/90 dark:bg-slate-900/90">
          <button
            onClick={() => handleSwitchTab('dashboard')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-teal-600 text-white'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => {
              setActiveChapterId(null);
              handleSwitchTab('chapters');
            }}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'chapters'
                ? 'bg-teal-600 text-white'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Chapters</span>
          </button>
          <button
            onClick={() => handleSwitchTab('mistakes')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'mistakes'
                ? 'bg-rose-600 text-white'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Mistakes ({overallAnalytics.totalWrongActive})</span>
          </button>
          <button
            onClick={() => handleSwitchTab('exam')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer ${
              activeTab === 'exam'
                ? 'bg-teal-600 text-white'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Timer className="w-3.5 h-3.5" />
            <span>Exam</span>
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'dashboard' && (
          <DashboardView
            overall={overallAnalytics}
            chapterAnalytics={chapterAnalytics}
            examAttempts={examAttempts}
            onSelectChapter={handleOpenChapter}
            onNavigateTab={handleSwitchTab}
            onResetAllProgress={handleResetAllProgress}
          />
        )}

        {activeTab === 'chapters' && !activeChapter && (
          <ChaptersView
            chapters={ALL_CHAPTERS}
            chapterAnalytics={chapterAnalytics}
            onSelectChapter={handleOpenChapter}
            onResetChapter={handleResetChapter}
          />
        )}

        {activeTab === 'chapters' && activeChapter && (
          <ChapterPracticeView
            chapter={activeChapter}
            allChapters={ALL_CHAPTERS}
            answersMap={answersMap}
            onSelectAnswer={(q, optId) => handleSelectAnswer(q, optId, false)}
            onResetChapter={handleResetChapter}
            onBackToChapters={() => setActiveChapterId(null)}
            onSelectChapter={handleOpenChapter}
          />
        )}

        {activeTab === 'mistakes' && (
          <MistakesView
            chapters={ALL_CHAPTERS}
            answersMap={answersMap}
            onRetryAnswer={(q, optId) => handleSelectAnswer(q, optId, true)}
            onSelectChapter={handleOpenChapter}
          />
        )}

        {activeTab === 'exam' && (
          <ExamSimulatorView
            allQuestions={ALL_QUESTIONS}
            chapters={ALL_CHAPTERS}
            examAttempts={examAttempts}
            onCompleteExam={handleCompleteExam}
            onSelectChapter={handleOpenChapter}
          />
        )}
      </main>
    </div>
  );
}
