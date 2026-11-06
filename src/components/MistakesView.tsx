import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Lightbulb,
  Search,
  XCircle,
} from 'lucide-react';
import { Chapter, Question, UserAnswerRecord } from '../types/mcq';
import { getWrongQuestionsList } from '../utils/mcqEngine';

interface MistakesViewProps {
  chapters: Chapter[];
  answersMap: Record<string, UserAnswerRecord>;
  onRetryAnswer: (question: Question, selectedOptionId: string) => void;
  onSelectChapter: (chapterId: string) => void;
}

export const MistakesView: React.FC<MistakesViewProps> = ({
  chapters,
  answersMap,
  onRetryAnswer,
  onSelectChapter,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [includeResolved, setIncludeResolved] = useState<boolean>(false);
  const [showAllExplanations, setShowAllExplanations] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedExplanations, setRevealedExplanations] = useState<Record<string, boolean>>({});
  const [retryFeedback, setRetryFeedback] = useState<
    Record<string, { selectedOptionId: string; isCorrect: boolean }>
  >({});

  const wrongItems = useMemo(
    () =>
      getWrongQuestionsList(chapters, answersMap, {
        chapterId: selectedChapterId,
        includeResolved: true,
        searchQuery,
      }),
    [chapters, answersMap, selectedChapterId, searchQuery]
  );

  const displayedItems = useMemo(() => {
    return wrongItems.filter((item) => {
      if (includeResolved) return true;
      if (!item.record.isCorrect) return true;
      if (retryFeedback[item.question.id]) return true;
      return false;
    });
  }, [wrongItems, includeResolved, retryFeedback]);

  const activeMistakesCount = useMemo(
    () => getWrongQuestionsList(chapters, answersMap, { includeResolved: false }).length,
    [chapters, answersMap]
  );

  const resolvedMistakesCount = useMemo(() => {
    const allEverWrong = getWrongQuestionsList(chapters, answersMap, { includeResolved: true });
    return allEverWrong.filter((i) => i.record.isCorrect).length;
  }, [chapters, answersMap]);

  const chaptersWithMistakes = useMemo(() => {
    const allEverWrong = getWrongQuestionsList(chapters, answersMap, { includeResolved: true });
    const countMap: Record<string, number> = {};
    for (const item of allEverWrong) {
      if (!includeResolved && item.record.isCorrect) continue;
      countMap[item.chapter.id] = (countMap[item.chapter.id] || 0) + 1;
    }
    return chapters
      .filter((c) => (countMap[c.id] || 0) > 0)
      .map((c) => ({
        chapter: c,
        count: countMap[c.id],
      }));
  }, [chapters, answersMap, includeResolved]);

  const handleOptionRetry = (question: Question, optionId: string) => {
    const isCorrect = optionId === question.correctOptionId;
    setRetryFeedback((prev) => ({
      ...prev,
      [question.id]: { selectedOptionId: optionId, isCorrect },
    }));
    setRevealedExplanations((prev) => ({
      ...prev,
      [question.id]: true,
    }));
    onRetryAnswer(question, optionId);
  };

  const toggleExplanation = (questionId: string) => {
    setRevealedExplanations((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Targeted Remediation • Wrong Answered Questions
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mt-1">
              Mistakes Review & Active Remediation Bank
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Every question answered incorrectly in Chapter Practice or Simulated Exams is automatically logged here. Re-attempt each question to master its anatomical concept and clear it from your active mistakes.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-mono text-xs tabular-nums">
            <div className="rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/60 dark:bg-rose-950/30 px-4 py-3">
              <div className="text-slate-500 dark:text-slate-400">Active Mistakes</div>
              <div className="text-xl font-bold text-rose-600 dark:text-rose-400 mt-0.5">
                {activeMistakesCount}
              </div>
            </div>
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/30 px-4 py-3">
              <div className="text-slate-500 dark:text-slate-400">Resolved on Retry</div>
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                {resolvedMistakesCount}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search missed questions..."
                className="pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-teal-500 w-56"
              />
            </div>

            <select
              value={selectedChapterId}
              onChange={(e) => setSelectedChapterId(e.target.value)}
              aria-label="Filter mistakes by chapter"
              className="px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-teal-500"
            >
              <option value="all">All Chapters ({displayedItems.length})</option>
              {chaptersWithMistakes.map(({ chapter, count }) => (
                <option key={chapter.id} value={chapter.id}>
                  Ch. {chapter.number}: {chapter.title} ({count})
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowAllExplanations((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-semibold text-teal-700 dark:text-teal-400 hover:border-teal-500 transition-colors cursor-pointer"
            >
              {showAllExplanations ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Hide All Explanations</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Show All Explanations</span>
                </>
              )}
            </button>

            <label className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includeResolved}
                onChange={(e) => setIncludeResolved(e.target.checked)}
                className="rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              <span>Include Resolved ({resolvedMistakesCount})</span>
            </label>
          </div>
        </div>
      </div>

      {/* Mistakes List */}
      {displayedItems.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">
          <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {activeMistakesCount === 0
              ? 'Zero Active Mistakes in Your Bank!'
              : 'No Mistakes Match Your Current Filter'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1.5 leading-relaxed">
            {activeMistakesCount === 0
              ? 'Whenever you answer a question incorrectly during Chapter Practice or in the 60-Minute Exam Simulator, it will appear here with its explanation so you can re-test yourself.'
              : 'Try selecting "All Chapters" or clearing your search query.'}
          </p>
          <button
            onClick={() => onSelectChapter(chapters[0].id)}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white px-4 py-2.5 text-xs font-semibold transition-colors cursor-pointer"
          >
            <span>Practice Chapters</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {displayedItems.map(({ question, chapter, record }) => {
            const feedback = retryFeedback[question.id];
            const isNowResolved = record.isCorrect;
            const showExplanation = Boolean(
              showAllExplanations || revealedExplanations[question.id] || feedback
            );

            return (
              <div
                key={question.id}
                className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 shadow-xs transition-all duration-200"
              >
                {/* Card Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <button
                      onClick={() => onSelectChapter(chapter.id)}
                      className="font-semibold text-teal-700 dark:text-teal-400 hover:underline cursor-pointer"
                    >
                      Ch. {String(chapter.number).padStart(2, '0')}: {chapter.title} • Q#{question.number}
                    </button>
                    <span className="text-slate-400 dark:text-slate-500 tabular-nums">
                      • Missed {record.wrongCount} time{record.wrongCount > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {isNowResolved ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Resolved & Mastered</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
                        <XCircle className="w-4 h-4" />
                        <span>
                          Previous Wrong Choice: Option {record.selectedOptionId.toUpperCase()}
                        </span>
                      </span>
                    )}

                    <button
                      onClick={() => toggleExplanation(question.id)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer"
                    >
                      {showExplanation ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hide Explanation</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Peek Explanation</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed mb-4">
                  {question.text}
                </h3>

                {/* Options for Interactive Retry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {question.options.map((opt) => {
                    const isCorrectOption = opt.id === question.correctOptionId;
                    const wasRetried = Boolean(feedback);
                    const isSelectedRetry = feedback?.selectedOptionId === opt.id;
                    const wasPreviousWrong =
                      !wasRetried && !record.isCorrect && record.selectedOptionId === opt.id;

                    let style =
                      'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:border-teal-500 text-slate-800 dark:text-slate-200';
                    if (wasRetried || showExplanation || isNowResolved) {
                      if (isCorrectOption) {
                        style =
                          'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 font-semibold';
                      } else if (isSelectedRetry && !isCorrectOption) {
                        style =
                          'border-rose-500 bg-rose-50/70 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100';
                      }
                    } else if (wasPreviousWrong) {
                      style =
                        'border-rose-300 dark:border-rose-800/70 bg-rose-50/40 dark:bg-rose-950/20 text-slate-800 dark:text-slate-200';
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleOptionRetry(question, opt.id)}
                        className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-2.5 cursor-pointer ${style}`}
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="font-mono font-bold uppercase text-xs px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                            {opt.id}
                          </span>
                          <span>{opt.text}</span>
                        </div>
                        {(wasRetried || showExplanation || isNowResolved) && isCorrectOption && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Drawer */}
                {showExplanation && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 transition-all duration-200">
                    <div className="rounded-xl border border-teal-200 dark:border-teal-900/70 bg-teal-50/50 dark:bg-teal-950/30 p-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-1.5">
                        <Lightbulb className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        <span>
                          Explanation • Correct Answer: Option{' '}
                          {question.correctOptionId.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
