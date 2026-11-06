import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Play,
  RotateCcw,
  Search,
  Sparkles,
  Target,
} from 'lucide-react';
import { Chapter, ChapterAnalytics } from '../types/mcq';
import { REGION_GROUPS } from '../data/index';

interface ChaptersViewProps {
  chapters: Chapter[];
  chapterAnalytics: ChapterAnalytics[];
  onSelectChapter: (chapterId: string) => void;
  onResetChapter: (chapterId: string) => void;
}

export const ChaptersView: React.FC<ChaptersViewProps> = ({
  chapters,
  chapterAnalytics,
  onSelectChapter,
  onResetChapter,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'in-progress' | 'completed' | 'unstarted'>('all');

  const analyticsById = useMemo(
    () => Object.fromEntries(chapterAnalytics.map((a) => [a.chapterId, a])),
    [chapterAnalytics]
  );

  const filteredChapters = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return chapters.filter((chapter) => {
      const stats = analyticsById[chapter.id];
      if (selectedRegion !== 'All' && chapter.regionGroup !== selectedRegion) {
        return false;
      }
      if (statusFilter === 'completed' && stats.progressPercentage < 100) return false;
      if (
        statusFilter === 'in-progress' &&
        (stats.answeredQuestions === 0 || stats.progressPercentage === 100)
      ) {
        return false;
      }
      if (statusFilter === 'unstarted' && stats.answeredQuestions > 0) return false;

      if (q) {
        const matchesTitle = chapter.title.toLowerCase().includes(q);
        const matchesDesc = chapter.description.toLowerCase().includes(q);
        const matchesNum = String(chapter.number) === q;
        if (!matchesTitle && !matchesDesc && !matchesNum) return false;
      }
      return true;
    });
  }, [chapters, analyticsById, selectedRegion, searchQuery, statusFilter]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header & Controls */}
      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400">
              33 Separated Anatomical Chapters • 580 Questions
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mt-1">
              Chapter-Wise MCQ Bank & Explanations
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Select any chapter to practice questions sequentially or jump to specific items with instant clinical and anatomical explanations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chapter or topic..."
                className="pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-teal-500 w-56"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
              aria-label="Filter chapters by completion status"
              className="px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-500"
            >
              <option value="all">All Statuses (33)</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed (100%)</option>
              <option value="unstarted">Not Started</option>
            </select>
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 overflow-x-auto pb-1">
          {['All', ...REGION_GROUPS].map((region) => {
            const active = selectedRegion === region;
            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  active
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {region === 'All' ? 'All Regions (33)' : region}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chapters Grid */}
      {filteredChapters.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center bg-white dark:bg-slate-900">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            No matching chapters found
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Try clearing your search filter or selecting "All Regions".
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredChapters.map((chapter) => {
            const stats = analyticsById[chapter.id];
            const isCompleted = stats.progressPercentage === 100;
            const hasStarted = stats.answeredQuestions > 0;

            return (
              <div
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className="group rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 hover:border-teal-500/80 dark:hover:border-teal-500/70 p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span>
                      CHAPTER {String(chapter.number).padStart(2, '0')} • {chapter.regionGroup}
                    </span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300 tabular-nums">
                      {chapter.questions.length} Qs
                    </span>
                  </div>

                  {/* Chapter Title */}
                  <h2 className="mt-2 text-lg font-bold text-slate-900 dark:text-slate-50 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {chapter.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {chapter.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                  {/* Progression Bar */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-1.5 tabular-nums">
                      <span className="text-slate-500 dark:text-slate-400">
                        Progress: {stats.answeredQuestions}/{stats.totalQuestions}
                      </span>
                      <div className="flex items-center gap-3">
                        {hasStarted && (
                          <span
                            className={`font-semibold ${
                              stats.accuracyPercentage >= 75
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : stats.accuracyPercentage >= 50
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-rose-600 dark:text-rose-400'
                            }`}
                          >
                            Acc: {stats.accuracyPercentage}%
                          </span>
                        )}
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {stats.progressPercentage}%
                        </span>
                      </div>
                    </div>

                    <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
                      <div
                        className="h-full bg-teal-600 dark:bg-teal-500 transition-all duration-500"
                        style={{
                          width: `${
                            stats.totalQuestions > 0
                              ? (stats.correctQuestions / stats.totalQuestions) * 100
                              : 0
                          }%`,
                        }}
                      />
                      <div
                        className="h-full bg-rose-500 transition-all duration-500"
                        style={{
                          width: `${
                            stats.totalQuestions > 0
                              ? (stats.wrongQuestions / stats.totalQuestions) * 100
                              : 0
                          }%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2 text-xs">
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Completed</span>
                        </span>
                      ) : hasStarted ? (
                        <span className="text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                          {stats.wrongQuestions > 0
                            ? `${stats.wrongQuestions} mistake${stats.wrongQuestions > 1 ? 's' : ''}`
                            : 'No mistakes so far'}
                        </span>
                      ) : (
                        <span className="text-slate-400 dark:text-slate-500">Ready to start</span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {hasStarted && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onResetChapter(chapter.id);
                          }}
                          title="Reset this chapter's progress"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 group-hover:translate-x-0.5 transition-transform">
                        <span>{hasStarted ? 'Continue' : 'Practice'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
