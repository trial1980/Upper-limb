import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { Chapter, Question, UserAnswerRecord } from '../types/mcq';

interface ChapterPracticeViewProps {
  chapter: Chapter;
  allChapters: Chapter[];
  answersMap: Record<string, UserAnswerRecord>;
  onSelectAnswer: (question: Question, optionId: string) => void;
  onResetChapter: (chapterId: string) => void;
  onBackToChapters: () => void;
  onSelectChapter: (chapterId: string) => void;
}

export const ChapterPracticeView: React.FC<ChapterPracticeViewProps> = ({
  chapter,
  allChapters,
  answersMap,
  onSelectAnswer,
  onResetChapter,
  onBackToChapters,
  onSelectChapter,
}) => {
  const initialIndex = useMemo(() => {
    const firstUnanswered = chapter.questions.findIndex((q) => !answersMap[q.id]);
    return firstUnanswered >= 0 ? firstUnanswered : 0;
  }, [chapter.id]);

  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    const firstUnanswered = chapter.questions.findIndex((q) => !answersMap[q.id]);
    setCurrentIndex(firstUnanswered >= 0 ? firstUnanswered : 0);
    setShowResetConfirm(false);
  }, [chapter.id]);

  const currentQuestion = chapter.questions[currentIndex] ?? chapter.questions[0];
  const currentRecord = answersMap[currentQuestion.id];
  const isAnswered = Boolean(currentRecord);

  const chapterStats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    let wrong = 0;
    for (const q of chapter.questions) {
      const r = answersMap[q.id];
      if (r) {
        answered++;
        if (r.isCorrect) correct++;
        else wrong++;
      }
    }
    const total = chapter.questions.length;
    const progressPct = total > 0 ? Math.round((answered / total) * 100) : 0;
    const accuracyPct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return { total, answered, correct, wrong, progressPct, accuracyPct };
  }, [chapter, answersMap]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight') {
        if (currentIndex < chapter.questions.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
        }
      } else {
        const keyLower = e.key.toLowerCase();
        const optionByLetter = currentQuestion.options.find((o) => o.id === keyLower);
        if (optionByLetter) {
          onSelectAnswer(currentQuestion, optionByLetter.id);
        } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          if (currentQuestion.options[idx]) {
            onSelectAnswer(currentQuestion, currentQuestion.options[idx].id);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, chapter.questions.length, currentQuestion, onSelectAnswer]);

  const nextChapter = useMemo(
    () => allChapters.find((c) => c.number === chapter.number + 1),
    [allChapters, chapter.number]
  );

  return (
    <div className="space-y-6 pb-12">
      {/* Chapter Top Bar & Progression Header */}
      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToChapters}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Chapters</span>
            </button>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Chapter {String(chapter.number).padStart(2, '0')} • {chapter.regionGroup}
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50">
                {chapter.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right font-mono text-xs tabular-nums">
              <div className="text-slate-500 dark:text-slate-400">
                Answered:{' '}
                <strong className="text-slate-900 dark:text-slate-100">
                  {chapterStats.answered}/{chapterStats.total}
                </strong>{' '}
                ({chapterStats.progressPct}%)
              </div>
              <div className="mt-0.5 space-x-2.5">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  {chapterStats.correct} Correct
                </span>
                <span className="text-rose-600 dark:text-rose-400 font-semibold">
                  {chapterStats.wrong} Wrong
                </span>
                <span className="text-slate-700 dark:text-slate-300 font-semibold">
                  Acc: {chapterStats.accuracyPct}%
                </span>
              </div>
            </div>

            {!showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                title="Reset Chapter Progress"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-200 dark:hover:border-rose-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 px-3 py-1.5 rounded-xl">
                <button
                  onClick={() => {
                    onResetChapter(chapter.id);
                    setCurrentIndex(0);
                    setShowResetConfirm(false);
                  }}
                  className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                >
                  Confirm Reset
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="text-xs text-slate-500 hover:underline cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Chapter Progression Bar */}
        <div className="mt-4 h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
          <div
            className="h-full bg-teal-600 dark:bg-teal-500 transition-all duration-300"
            style={{
              width: `${
                chapterStats.total > 0 ? (chapterStats.correct / chapterStats.total) * 100 : 0
              }%`,
            }}
          />
          <div
            className="h-full bg-rose-500 transition-all duration-300"
            style={{
              width: `${
                chapterStats.total > 0 ? (chapterStats.wrong / chapterStats.total) * 100 : 0
              }%`,
            }}
          />
        </div>

        {/* Question Number Pill Strip */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 overflow-x-auto pb-1.5">
          {chapter.questions.map((q, idx) => {
            const rec = answersMap[q.id];
            const isCurrent = idx === currentIndex;
            let stateClasses =
              'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-transparent';
            if (rec) {
              stateClasses = rec.isCorrect
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                : 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-800';
            }
            if (isCurrent) {
              stateClasses += ' ring-2 ring-teal-600 dark:ring-teal-400 font-bold';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`min-w-8 h-8 px-2 rounded-lg border text-xs font-mono tabular-nums shrink-0 transition-all cursor-pointer ${stateClasses}`}
              >
                {q.number}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Question Workspace */}
      <div
        key={currentQuestion.id}
        className="rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs transition-all duration-200"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 tabular-nums">
              Question {currentQuestion.number} of {chapter.questions.length}
            </span>
            {currentQuestion.source && (
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                • Source: {currentQuestion.source}
              </span>
            )}
          </div>

          {isAnswered && (
            <div
              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                currentRecord.isCorrect
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-rose-600 dark:text-rose-400'
              }`}
            >
              {currentRecord.isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Answered Correctly</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4" />
                  <span>Answered Incorrectly — Saved to Mistakes Bank</span>
                </>
              )}
            </div>
          )}
        </div>

        <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-50 leading-relaxed mb-6">
          {currentQuestion.text}
        </h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = currentRecord?.selectedOptionId === option.id;
            const isCorrectOption = option.id === currentQuestion.correctOptionId;

            let cardStyle =
              'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-teal-500/70 dark:hover:border-teal-500/70 hover:bg-teal-50/30 dark:hover:bg-teal-950/20 text-slate-800 dark:text-slate-200';
            let badgeStyle =
              'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300';

            if (isAnswered) {
              if (isCorrectOption) {
                cardStyle =
                  'border-emerald-500 dark:border-emerald-500/80 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100';
                badgeStyle = 'bg-emerald-600 border-emerald-600 text-white';
              } else if (isSelected && !isCorrectOption) {
                cardStyle =
                  'border-rose-500 dark:border-rose-500/80 bg-rose-50/70 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100';
                badgeStyle = 'bg-rose-600 border-rose-600 text-white';
              } else {
                cardStyle =
                  'border-slate-200/60 dark:border-slate-800/60 bg-slate-50/30 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400 opacity-75';
              }
            }

            return (
              <button
                key={option.id}
                data-testid={`option-${option.id}`}
                onClick={() => onSelectAnswer(currentQuestion, option.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-4 cursor-pointer ${cardStyle}`}
              >
                <div className="flex items-start gap-3.5">
                  <span
                    className={`w-7 h-7 rounded-lg border text-xs font-mono font-bold uppercase flex items-center justify-center shrink-0 mt-0.5 transition-colors ${badgeStyle}`}
                  >
                    {option.id}
                  </span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">
                    {option.text}
                  </span>
                </div>

                {isAnswered && isCorrectOption && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Correct Answer</span>
                  </span>
                )}
                {isAnswered && isSelected && !isCorrectOption && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 dark:text-rose-300 shrink-0 mt-1">
                    <XCircle className="w-4 h-4" />
                    <span>Your Choice</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Anatomical Explanation Panel */}
        {isAnswered && (
          <div className="mt-6 rounded-xl border border-teal-200 dark:border-teal-900/80 bg-teal-50/60 dark:bg-teal-950/30 p-5 transition-all duration-200">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-2">
              <Lightbulb className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>
                Anatomical & Clinical Explanation (Correct Option:{' '}
                {currentQuestion.correctOptionId.toUpperCase()})
              </span>
            </div>
            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Navigation Controls Footer */}
        <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Question</span>
          </button>

          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
            Tip: Use keys A–D or 1–4 to answer, and ← / → arrows to navigate
          </span>

          {currentIndex < chapter.questions.length - 1 ? (
            <button
              onClick={() =>
                setCurrentIndex((prev) => Math.min(chapter.questions.length - 1, prev + 1))
              }
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>Next Question</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : nextChapter ? (
            <button
              onClick={() => onSelectChapter(nextChapter.id)}
              className="inline-flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white px-5 py-2.5 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>
                Next Chapter ({nextChapter.number}. {nextChapter.title})
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onBackToChapters}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>Finish & Return to Chapters</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
