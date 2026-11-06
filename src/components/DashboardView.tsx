import React, { useMemo, useState } from 'react';
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Compass,
  Filter,
  Flame,
  Layers,
  Play,
  RotateCcw,
  Search,
  Target,
  Timer,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import {
  Chapter,
  ChapterAnalytics,
  ExamAttempt,
  OverallAnalytics,
} from '../types/mcq';
import { REGION_GROUPS, QUESTION_BY_ID } from '../data/index';
import { formatDurationHuman } from '../utils/mcqEngine';

interface DashboardViewProps {
  overall: OverallAnalytics;
  chapterAnalytics: ChapterAnalytics[];
  examAttempts: ExamAttempt[];
  onSelectChapter: (chapterId: string) => void;
  onNavigateTab: (tab: 'dashboard' | 'chapters' | 'mistakes' | 'exam') => void;
  onResetAllProgress: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  overall,
  chapterAnalytics,
  examAttempts,
  onSelectChapter,
  onNavigateTab,
  onResetAllProgress,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'number' | 'progress' | 'accuracy' | 'mistakes'>('number');
  const [expandedExamId, setExpandedExamId] = useState<string | null>(
    examAttempts.length > 0 ? examAttempts[0].id : null
  );
  const [confirmReset, setConfirmReset] = useState(false);

  // Compute regional summaries
  const regionalSummaries = useMemo(() => {
    return REGION_GROUPS.map((region) => {
      const chaptersInRegion = chapterAnalytics.filter((c) => c.regionGroup === region);
      const totalQ = chaptersInRegion.reduce((s, c) => s + c.totalQuestions, 0);
      const answeredQ = chaptersInRegion.reduce((s, c) => s + c.answeredQuestions, 0);
      const correctQ = chaptersInRegion.reduce((s, c) => s + c.correctQuestions, 0);
      const wrongQ = chaptersInRegion.reduce((s, c) => s + c.wrongQuestions, 0);
      const progress = totalQ > 0 ? Math.round((answeredQ / totalQ) * 100) : 0;
      const accuracy = answeredQ > 0 ? Math.round((correctQ / answeredQ) * 100) : 0;
      return {
        region,
        chapterCount: chaptersInRegion.length,
        totalQ,
        answeredQ,
        correctQ,
        wrongQ,
        progress,
        accuracy,
      };
    });
  }, [chapterAnalytics]);

  // Filter and sort chapters for analytics table
  const filteredChapters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return chapterAnalytics
      .filter((ch) => {
        if (selectedRegion !== 'All' && ch.regionGroup !== selectedRegion) return false;
        if (q && !ch.chapterTitle.toLowerCase().includes(q) && !String(ch.chapterNumber).includes(q)) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'progress') return b.progressPercentage - a.progressPercentage || a.chapterNumber - b.chapterNumber;
        if (sortBy === 'accuracy') return b.accuracyPercentage - a.accuracyPercentage || a.chapterNumber - b.chapterNumber;
        if (sortBy === 'mistakes') return b.wrongQuestions - a.wrongQuestions || a.chapterNumber - b.chapterNumber;
        return a.chapterNumber - b.chapterNumber;
      });
  }, [chapterAnalytics, selectedRegion, searchQuery, sortBy]);

  // Find next recommended chapter to study
  const recommendedChapter = useMemo(() => {
    const inProgress = chapterAnalytics.find(
      (c) => c.answeredQuestions > 0 && c.answeredQuestions < c.totalQuestions
    );
    if (inProgress) return inProgress;
    const unstarted = chapterAnalytics.find((c) => c.answeredQuestions === 0);
    return unstarted ?? chapterAnalytics[0];
  }, [chapterAnalytics]);

  return (
    <div className="space-y-8 pb-12">
      {/* Overall Progression Banner */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm transition-all duration-300">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400">
              <Compass className="w-4 h-4" />
              <span>Locomotor Module 101 • Upper Limb Anatomy Bank</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Progression & Clinical Performance Analytics
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Master all <span className="font-semibold text-slate-900 dark:text-slate-200 tabular-nums">{overall.totalQuestionsInBank}</span> board-style upper limb anatomy questions across <span className="font-semibold text-slate-900 dark:text-slate-200 tabular-nums">{overall.totalChapters}</span> chapters with step-by-step anatomical explanations, targeted mistake recovery, and timed 60-question exam simulations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {recommendedChapter && (
              <button
                onClick={() => onSelectChapter(recommendedChapter.chapterId)}
                className="inline-flex items-center gap-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 active:bg-teal-700 text-white font-semibold px-5 py-3 text-sm shadow-sm transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>
                  {recommendedChapter.answeredQuestions > 0
                    ? `Resume Ch. ${recommendedChapter.chapterNumber}: ${recommendedChapter.chapterTitle}`
                    : `Start Ch. ${recommendedChapter.chapterNumber}: ${recommendedChapter.chapterTitle}`}
                </span>
              </button>
            )}
            <button
              onClick={() => onNavigateTab('exam')}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium px-4 py-3 text-sm transition-all cursor-pointer"
            >
              <Timer className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>60-Min Exam Simulator</span>
            </button>
          </div>
        </div>

        {/* Master Progression Bar */}
        <div className="mt-7 pt-6 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Overall Bank Completion
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                ({overall.totalAnswered} / {overall.totalQuestionsInBank} Questions Answered)
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono tabular-nums">
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                {overall.totalCorrect} Correct
              </span>
              <span className="text-rose-600 dark:text-rose-400 font-medium">
                {overall.totalWrongActive} Active Mistakes
              </span>
              <span className="text-base font-bold text-teal-700 dark:text-teal-400">
                {overall.overallProgressPercentage}%
              </span>
            </div>
          </div>

          <div className="h-3.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex p-0.5">
            <div
              style={{
                width: `${
                  overall.totalQuestionsInBank > 0
                    ? (overall.totalCorrect / overall.totalQuestionsInBank) * 100
                    : 0
                }%`,
              }}
              className="h-full bg-teal-600 dark:bg-teal-500 first:rounded-l-full last:rounded-r-full transition-all duration-500 ease-out"
              title={`Correct: ${overall.totalCorrect}`}
            />
            <div
              style={{
                width: `${
                  overall.totalQuestionsInBank > 0
                    ? (overall.totalWrongActive / overall.totalQuestionsInBank) * 100
                    : 0
                }%`,
              }}
              className="h-full bg-rose-500 dark:bg-rose-500 last:rounded-r-full transition-all duration-500 ease-out"
              title={`Wrong: ${overall.totalWrongActive}`}
            />
          </div>
        </div>
      </section>

      {/* 5 Key Performance Indicator Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="rounded-xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Questions Answered</span>
            <BookOpen className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-50 tabular-nums">
              {overall.totalAnswered}
              <span className="text-sm font-normal text-slate-400 dark:text-slate-500">
                {' '}
                / {overall.totalQuestionsInBank}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              {overall.chaptersCompleted} of {overall.totalChapters} chapters 100% complete
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Accuracy Rate</span>
            <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-50 tabular-nums">
              {overall.overallAccuracyPercentage}%
            </div>
            <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 tabular-nums">
              {overall.totalCorrect} correct responses
            </p>
          </div>
        </div>

        <div
          onClick={() => onNavigateTab('mistakes')}
          className="rounded-xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900 hover:border-rose-300 dark:hover:border-rose-800/70 p-5 shadow-xs flex flex-col justify-between transition-colors cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Active Mistakes</span>
            <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 tabular-nums">
              {overall.totalWrongActive}
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 flex items-center gap-1 transition-colors">
              <span>Review wrong answers</span>
              <ArrowRight className="w-3 h-3" />
            </p>
          </div>
        </div>

        <div
          onClick={() => onNavigateTab('exam')}
          className="rounded-xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900 hover:border-teal-300 dark:hover:border-teal-800/70 p-5 shadow-xs flex flex-col justify-between transition-colors cursor-pointer group"
        >
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Exams Completed</span>
            <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-50 tabular-nums">
              {overall.examsTaken}
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              60 Qs • 60 min simulator
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-medium uppercase tracking-wider">Exam Score (Avg / Best)</span>
            <Award className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold text-slate-900 dark:text-slate-50 tabular-nums">
              {overall.examsTaken > 0 ? `${overall.averageExamScore}%` : '—'}
              <span className="text-sm font-normal text-slate-400 dark:text-slate-500">
                {' '}
                / {overall.examsTaken > 0 ? `${overall.bestExamScore}%` : '—'}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {overall.examsTaken > 0 ? 'Across all simulated exams' : 'Take your first 60-min exam'}
            </p>
          </div>
        </div>
      </section>

      {/* Regional Anatomical Breakdown */}
      <section className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Anatomical Region Mastery
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Progression and accuracy aggregated across the 5 functional anatomical subdivisions of the upper limb.
            </p>
          </div>
          {selectedRegion !== 'All' && (
            <button
              onClick={() => setSelectedRegion('All')}
              className="text-xs font-medium text-teal-600 dark:text-teal-400 hover:underline self-start sm:self-auto cursor-pointer"
            >
              Show All Regions
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {regionalSummaries.map((reg) => {
            const isSelected = selectedRegion === reg.region;
            return (
              <button
                key={reg.region}
                onClick={() => setSelectedRegion(isSelected ? 'All' : reg.region)}
                className={`text-left rounded-xl p-4 border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-teal-600 dark:border-teal-500 bg-teal-50/50 dark:bg-teal-950/30'
                    : 'border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 line-clamp-1">
                    {reg.region}
                  </span>
                  <span className="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 tabular-nums">
                    {reg.progress}%
                  </span>
                </div>
                <div className="mt-2.5 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full bg-teal-600 dark:bg-teal-500 transition-all duration-500"
                    style={{ width: `${reg.progress}%` }}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 tabular-nums">
                  <span>
                    {reg.answeredQ}/{reg.totalQ} Qs
                  </span>
                  <span>
                    Acc: <strong className="text-slate-700 dark:text-slate-300">{reg.accuracy}%</strong>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Chapter-by-Chapter Progression & Performance Table */}
      <section className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Chapter-by-Chapter Progression & Performance ({filteredChapters.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click any chapter to launch interactive practice with full anatomical explanations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chapter..."
                className="pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-teal-500 w-48 sm:w-56"
              />
            </div>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              aria-label="Filter by anatomical region"
              className="px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-500"
            >
              <option value="All">All 5 Regions (33 Chapters)</option>
              {REGION_GROUPS.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </select>

            {/* Sort selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              aria-label="Sort chapters by"
              className="px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-500"
            >
              <option value="number">Sort: Chapter Order (1–33)</option>
              <option value="progress">Sort: Highest Progression</option>
              <option value="accuracy">Sort: Highest Accuracy</option>
              <option value="mistakes">Sort: Most Mistakes</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                <th className="py-3 pr-4 font-semibold">#</th>
                <th className="py-3 px-4 font-semibold">Chapter & Region</th>
                <th className="py-3 px-4 font-semibold w-56">Progression</th>
                <th className="py-3 px-4 font-semibold text-right">Answered</th>
                <th className="py-3 px-4 font-semibold text-right">Accuracy</th>
                <th className="py-3 px-4 font-semibold text-right">Mistakes</th>
                <th className="py-3 pl-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70 text-sm">
              {filteredChapters.map((ch) => (
                <tr
                  key={ch.chapterId}
                  onClick={() => onSelectChapter(ch.chapterId)}
                  className="hover:bg-slate-50/90 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
                >
                  <td className="py-3.5 pr-4 font-mono text-xs text-slate-400 dark:text-slate-500 tabular-nums">
                    {String(ch.chapterNumber).padStart(2, '0')}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {ch.chapterTitle}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {ch.regionGroup}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex-1 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-teal-600 dark:bg-teal-500 transition-all duration-500"
                          style={{ width: `${ch.progressPercentage}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 w-9 text-right tabular-nums">
                        {ch.progressPercentage}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-xs text-slate-600 dark:text-slate-300 tabular-nums">
                    {ch.answeredQuestions} / {ch.totalQuestions}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-xs tabular-nums">
                    {ch.answeredQuestions > 0 ? (
                      <span
                        className={`font-semibold ${
                          ch.accuracyPercentage >= 75
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : ch.accuracyPercentage >= 50
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-rose-600 dark:text-rose-400'
                        }`}
                      >
                        {ch.accuracyPercentage}%
                      </span>
                    ) : (
                      <span className="text-slate-400 dark:text-slate-600">—</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-xs tabular-nums">
                    {ch.wrongQuestions > 0 ? (
                      <span className="text-rose-600 dark:text-rose-400 font-semibold">
                        {ch.wrongQuestions}
                      </span>
                    ) : (
                      <span className="text-slate-400 dark:text-slate-600">0</span>
                    )}
                  </td>
                  <td className="py-3.5 pl-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectChapter(ch.chapterId);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 cursor-pointer"
                    >
                      <span>{ch.answeredQuestions > 0 ? 'Continue' : 'Practice'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Simulated Exam History & Analytics */}
      <section className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Exam Simulator Performance & History ({examAttempts.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Detailed analytics and chapter-by-chapter breakdown for every 60-question timed exam taken.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('exam')}
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold px-4 py-2.5 text-xs transition-all self-start sm:self-auto cursor-pointer"
          >
            <Timer className="w-4 h-4" />
            <span>Launch New 60-Question Exam</span>
          </button>
        </div>

        {examAttempts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-800 p-8 text-center">
            <Timer className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              No Simulated Exams Taken Yet
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1">
              Test your readiness under real exam conditions with 60 randomized questions drawn across all 33 chapters and a 60-minute countdown timer.
            </p>
            <button
              onClick={() => onNavigateTab('exam')}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span>Start 60-Minute Exam Simulator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {examAttempts.map((exam, index) => {
              const isExpanded = expandedExamId === exam.id;
              const dateStr = new Date(exam.completedAt).toLocaleString(undefined, {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });
              const passed = exam.scorePercentage >= 60;

              return (
                <div
                  key={exam.id}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedExamId(isExpanded ? null : exam.id)}
                    className="w-full flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-colors text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {passed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                      )}
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                          Simulated Exam #{examAttempts.length - index} •{' '}
                          <span
                            className={`tabular-nums ${
                              passed
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-rose-600 dark:text-rose-400'
                            }`}
                          >
                            {exam.scorePercentage}% ({exam.correctCount}/{exam.totalQuestions})
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                          {dateStr} • Time used: {formatDurationHuman(exam.durationSeconds)} • Answered:{' '}
                          {exam.answeredCount}/{exam.totalQuestions}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
                        {isExpanded ? 'Hide Chapter Breakdown' : 'View Chapter Breakdown'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-200">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                        Per-Chapter Accuracy in This Exam ({exam.chapterBreakdown.length} Chapters Sampled)
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {exam.chapterBreakdown.map((cb) => (
                          <div
                            key={cb.chapterId}
                            onClick={() => onSelectChapter(cb.chapterId)}
                            className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700 cursor-pointer transition-colors"
                          >
                            <span className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate pr-2">
                              {cb.chapterTitle}
                            </span>
                            <span
                              className={`text-xs font-mono font-semibold tabular-nums shrink-0 ${
                                cb.accuracy >= 75
                                  ? 'text-emerald-600 dark:text-emerald-400'
                                  : cb.accuracy >= 50
                                  ? 'text-amber-600 dark:text-amber-400'
                                  : 'text-rose-600 dark:text-rose-400'
                              }`}
                            >
                              {cb.correct}/{cb.total} ({cb.accuracy}%)
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Footer Reset Control */}
      <div className="flex items-center justify-end pt-2">
        {!confirmReset ? (
          <button
            onClick={() => setConfirmReset(true)}
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Saved Progress & Exam History</span>
          </button>
        ) : (
          <div className="flex items-center gap-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 px-3.5 py-2 rounded-xl">
            <span className="text-xs font-medium text-rose-800 dark:text-rose-200">
              Clear all answered questions and exam records?
            </span>
            <button
              onClick={() => {
                onResetAllProgress();
                setConfirmReset(false);
              }}
              className="text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 px-2.5 py-1 rounded-md cursor-pointer"
            >
              Confirm Reset
            </button>
            <button
              onClick={() => setConfirmReset(false)}
              className="text-xs text-slate-600 dark:text-slate-400 hover:underline cursor-pointer"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
